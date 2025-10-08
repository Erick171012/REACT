
import React from "react";
import "./ParentEvents.css";

export default function ParentEvents() {
  const events = [
    {
      title: "Reunión de Padres",
      date: "10 Oct 2025",
      time: "7:00 p.m.",
      place: "Salón de actos",
      desc: "Reunión general para tratar el avance académico del segundo periodo.",
      type: "Importante",
    },
    {
      title: "Día del Idioma",
      date: "17 Oct 2025",
      time: "8:00 a.m.",
      place: "Patio central",
      desc: "Actividades culturales y representaciones teatrales por los estudiantes.",
      type: "Cultural",
    },
    {
      title: "Entrega de Boletines",
      date: "25 Oct 2025",
      time: "9:00 a.m.",
      place: "Coordinación Académica",
      desc: "Los padres podrán recoger los boletines académicos del periodo.",
      type: "Académico",
    },
  ];

  const getTypeClass = (type) => {
    switch (type) {
      case "Importante": return "type-important";
      case "Cultural": return "type-cultural";
      case "Académico": return "type-academic";
      default: return "";
    }
  };

  return (
    <div className="parent-events">
      <h1 className="page-title">Eventos del Colegio</h1>
      <p className="page-subtitle">
        Consulta los próximos eventos y actividades programadas.
      </p>

      <div className="events-grid">
        {events.map((ev, i) => (
          <div key={i} className="event-card">
            <div className={`event-type ${getTypeClass(ev.type)}`}>{ev.type}</div>
            <h3 className="event-title">{ev.title}</h3>
            <p className="event-date">
              📅 {ev.date} · 🕓 {ev.time}
            </p>
            <p className="event-place">📍 {ev.place}</p>
            <p className="event-desc">{ev.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



