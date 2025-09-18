import "./ParentEvents.css";

function EventCard({ date, month, title, time, place, action }) {
  return (
    <div className="event-card">
      <div className="event-date">
        <div className="event-day">{date}</div>
        <div className="event-month">{month}</div>
      </div>
      <div className="event-info">
        <div className="event-title">{title}</div>
        <div className="event-time">{time}</div>
        <div className="event-place">{place}</div>
      </div>
      <button className="event-btn">{action}</button>
    </div>
  );
}

export default function ParentEvents() {
  return (
    <div className="events-container">
      <h1 className="events-title">🎉 Próximos Eventos</h1>

      <div className="events-list">
        <EventCard
          date="15"
          month="JUN"
          title="🎭 Festival de Talentos"
          time="2:00 PM - 6:00 PM"
          place="Auditorio Principal"
          action="Participar"
        />
        <EventCard
          date="20"
          month="JUN"
          title="📚 Feria del Libro"
          time="8:00 AM - 4:00 PM"
          place="Patio Central"
          action="Ver Más"
        />
      </div>
    </div>
  );
}


