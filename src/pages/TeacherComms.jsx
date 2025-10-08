import "./TeacherComms.css";
import { useState } from "react";

export default function TeacherComms() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      autor: "Prof. Carlos Mendoza",
      tiempo: "Hace 2 horas",
      mensaje:
        "Excelente trabajo en el último examen de álgebra. Carlos mostró gran dedicación.",
      categoria: "Coordinación Académica",
    },
    {
      id: 2,
      autor: "Coordinación Académica",
      tiempo: "Ayer",
      mensaje:
        "Recordamos que la reunión de padres será el próximo viernes a las 6:00 PM.",
      categoria: "Aviso General",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [categoria, setCategoria] = useState("Aviso General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return alert("⚠️ Escribe un mensaje antes de publicar.");

    const nuevo = {
      id: Date.now(),
      autor: "Prof. Ana Gómez",
      tiempo: "Justo ahora",
      mensaje: newMessage,
      categoria,
    };

    setMessages([nuevo, ...messages]);
    setNewMessage("");
    setCategoria("Aviso General");
  };

  return (
    <div className="teacher-comms">
      <h2 className="title">💬 Comunicación</h2>
      <p className="subtitle">
        Publica mensajes o comunicados para los padres y estudiantes. Ellos podrán
        leerlos, pero no responderlos.
      </p>

      {/* Formulario de publicación */}
      <form className="comms-form" onSubmit={handleSubmit}>
        <label>Categoría:</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Aviso General">Aviso General</option>
          <option value="Felicitación">Felicitación</option>
          <option value="Recordatorio">Recordatorio</option>
        </select>

        <textarea
          rows={3}
          placeholder="Escribe el mensaje que deseas enviar..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />

        <button type="submit" className="send-btn">
          📢 Publicar Mensaje
        </button>
      </form>

      {/* Listado de mensajes publicados */}
      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message-card">
            <div className="msg-header">
              <h4>{msg.autor}</h4>
              <span className="time">{msg.tiempo}</span>
            </div>
            <p className="msg-body">{msg.mensaje}</p>
            <span className="msg-category">{msg.categoria}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
