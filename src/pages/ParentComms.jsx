import React from "react";
import "./ParentComms.css";

export default function ParentComms() {
  const messages = [
    {
      id: 1,
      date: "07 Oct 2025",
      sender: "Prof. Ana Gómez",
      subject: "Felicitaciones por el desempeño de Carlos",
      content:
        "Carlos ha mostrado un gran compromiso con sus tareas esta semana. ¡Felicitaciones!",
      read: false,
    },
    {
      id: 2,
      date: "05 Oct 2025",
      sender: "Coordinación Académica",
      subject: "Reunión informativa para padres",
      content:
        "Se invita a todos los padres a la reunión virtual del próximo lunes a las 7:00 p.m.",
      read: true,
    },
  ];

  return (
    <div className="parent-comms">
      <h1 className="page-title">Comunicaciones del Colegio</h1>
      <p className="page-subtitle">
        A continuación encontrarás los mensajes enviados por docentes o
        coordinación sobre el progreso de{" "}
        <strong>Carlos González</strong>.
      </p>

      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-card ${msg.read ? "read" : ""}`}>
            <div className="message-header">
              <div>
                <h3>{msg.subject}</h3>
                <p className="meta">
                  <span className="sender">{msg.sender}</span> · {msg.date}
                </p>
              </div>
            </div>
            <p className="message-content">{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


