import { useState, useEffect } from "react";
import "./App.scss";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageList from "./components/MessageList/MessageList";

function App() {
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState([]);

  // Extraer la lógica de carga en una función aparte
  const loadMessages = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/messages");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error al cargar los mensajes:", error);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleNewMessage = async (newMessage) => {
    setResponse(newMessage);
    await loadMessages();
  };

  return (
    <div className="App">
      <header className="App-header">
        <MessageForm onNewMessage={handleNewMessage} />
        {response && <div className="response">{response}</div>}
        <MessageList messages={messages} />
      </header>
    </div>
  );
}

export default App;
