import React from "react";
import { MessageSquare } from "lucide-react";
import "./StudentMessages.css";

// Tarjeta moderna con efecto hover
const MessageCard = ({ title, message, time }) => (
  <div className="message-card">
    <h2>{title}</h2>
    <p>{message}</p>
    <span>{time}</span>
  </div>
);

export default function StudentMessages() {
  const messages = [
    {
      title: "Mensaje del Profesor de Matemáticas",
      message:
        "Recuerda que mañana hay evaluación del segundo periodo. Repasa los temas de álgebra.",
      time: "Hace 2 horas",
    },
    {
      title: "Mensaje del Coordinador",
      message:
        "El día viernes habrá jornada cultural. Asistencia obligatoria.",
      time: "Hace 1 día",
    },
    {
      title: "Aviso de Rectoría",
      message:
        "Se invita a los estudiantes a participar en la jornada ecológica del próximo lunes.",
      time: "Hace 3 días",
    },
  ];

  return (
    <div className="student-messages-page">
      <header className="messages-header">
        <MessageSquare className="icon" />
        <h1>Mensajes</h1>
      </header>

      <p className="subtitle">
        Consulta los avisos y comunicados enviados por tus profesores y
        coordinadores académicos.
      </p>

      <div className="messages-grid">
        {messages.map((msg, index) => (
          <MessageCard
            key={index}
            title={msg.title}
            message={msg.message}
            time={msg.time}
          />
        ))}
      </div>
    </div>
  );
}

