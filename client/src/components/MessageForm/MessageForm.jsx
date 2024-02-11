import { useState } from 'react';
import './MessageForm.scss'

function MessageForm({ onNewMessage }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      onNewMessage(data.response); // Llamar a onNewMessage cuando se recibe una respuesta
      setQuery(''); // Limpiar el campo después de enviar
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
      onNewMessage("Error al procesar la consulta. Asegúrese de que el servidor esté ejecutándose.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Introduce texto"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MessageForm;
