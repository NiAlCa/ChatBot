import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import OpenAI from "openai";
import cors from "cors";
import { connectDB, client } from "./database.js";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(console.error);

app.post("/api/query", async (req, res) => {
  try {
    const { query } = req.body;
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }],
    });

    const response = chatCompletion.choices[0].message.content;

    const collection = client.db("ChatBot").collection("ChatBot");
    const result = await collection.insertOne({ query, response });

    console.log("Documento guardado con éxito:", result);
    res.json({ response });
  } catch (error) {
    console.error("Error al realizar la solicitud a la API de OpenAI:", error);
    res
      .status(500)
      .json({ message: "Error al procesar la consulta", error: error.message });
  }
});

app.get("/api/messages", async (req, res) => {
  try {
    const collection = client.db("ChatBot").collection("ChatBot");
    const messages = await collection.find({}).toArray();
    res.json(messages);
  } catch (error) {
    console.error("Error al obtener los mensajes:", error);
    res
      .status(500)
      .json({ message: "Error al obtener los mensajes", error: error.message });
  }
});
