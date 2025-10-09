// src/pages/StudentEvents.jsx
import "./StudentDashboard.css"; // usa estilos del dashboard por ahora

export default function StudentEvents() {
  const events = [
    {
      id: 1,
      title: "Feria de Ciencias",
      date: "15 Oct 2025",
      description: "Participa con tus proyectos de investigación escolar.",
    },
    {
      id: 2,
      title: "Semana Cultural",
      date: "25 Oct 2025",
      description: "Muestras artísticas, presentaciones y actividades recreativas.",
    },
    {
      id: 3,
      title: "Torneo Interclases",
      date: "05 Nov 2025",
      description: "Compite junto a tus compañeros en fútbol, baloncesto y más.",
    },
  ];

  return (
    <div className="student-dashboard">
      <h2 className="title">🎉 Eventos Escolares</h2>
      <p className="subtitle">
        Consulta los próximos eventos organizados por el colegio.
      </p>

      <div className="cards-grid">
        {events.map((event) => (
          <div key={event.id} className="card">
            <h3>{event.title}</h3>
            <p className="date">{event.date}</p>
            <p>{event.description}</p>
            <button className="btn-primary">Ver Detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
}
