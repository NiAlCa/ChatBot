import { MongoClient, ServerApiVersion } from "mongodb";

const uri =process.env["MONGODB_URI"];
const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB Atlas");
    return client;
  } catch (e) {
    console.error("No se pudo conectar a MongoDB Atlas", e);
    process.exit(1);
  }
}
export { connectDB, client };
