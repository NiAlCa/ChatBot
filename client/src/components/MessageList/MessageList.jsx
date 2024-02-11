import './MessageList.scss'

function MessageList({ messages }) {
    return (
      <div className="messages">
        <h2>Mensajes Anteriores</h2>
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p><strong>Consulta:</strong> {msg.query}</p>
            <p><strong>Respuesta:</strong> {msg.response}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default MessageList;
  