// ❗️OJO: Este componente NO debe envolver con <Layout/>.
// Tu router ya renderiza Layout por fuera (main.jsx)

import "./ParentAppointments.css";

const APPOINTMENTS = [
  {
    id: 1,
    type: "Reunión Urgente",
    title: "Reunión de Padres - Comportamiento Académico",
    date: "30 de mayo de 2025",
    time: "3:00 PM",
    location: "Aula 301 - Coordinación Académica",
    reason: "Discutir el rendimiento académico y plan de mejoramiento",
    organizer: "Coordinadora Ana Sofía Martínez",
    priority: "high", // high | normal
    status: "pending", // pending | confirmed
    reminders: [
      "🔔 Recordatorio enviado hace 3 días",
      "📱 SMS enviado ayer",
      "⏰ Próximo recordatorio: Mañana 9:00 AM",
    ],
  },
  {
    id: 2,
    type: "Reunión General",
    title: "Reunión de Padres - Tercer Período",
    date: "15 de junio de 2025",
    time: "6:00 PM",
    location: "Auditorio Principal",
    reason: "Entrega de boletines y socialización de actividades",
    organizer: "Directora María Elena Castro",
    priority: "normal",
    status: "confirmed",
    reminders: [],
  },
  {
    id: 3,
    type: "Cita Individual",
    title: "Seguimiento Académico - Matemáticas",
    date: "7 de junio de 2025",
    time: "4:30 PM",
    location: "Oficina Coordinación",
    reason: "Revisar estrategias de apoyo en matemáticas",
    organizer: "Prof. Carlos Mendoza",
    priority: "normal",
    status: "pending",
    reminders: [],
  },
];

export default function ParentAppointments() {
  const confirm = (appt) =>
    alert(`✅ Asistencia confirmada para:\n${appt.title}`);
  const reschedule = (appt) =>
    alert(`📅 Solicitud de reprogramación enviada para:\n${appt.title}`);

  return (
    <div className="appt-container">
      {/* Encabezado */}
      <div className="appt-header">
        <div>
          <h1>Citaciones y Recordatorios</h1>
          <p className="appt-subtitle">
            Gestiona tus reuniones y confirma asistencia en un click.
          </p>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="appt-list">
        {APPOINTMENTS.map((a) => (
          <article
            key={a.id}
            className={`appt-card ${
              a.priority === "high" ? "is-urgent" : "is-normal"
            }`}
          >
            {/* Etiqueta de prioridad */}
            <span
              className={`appt-chip ${
                a.priority === "high" ? "chip-danger" : "chip-info"
              }`}
            >
              {a.priority === "high" ? "ALTA PRIORIDAD" : "PRIORIDAD NORMAL"}
            </span>

            {/* Cabecera */}
            <header className="appt-card-header">
              <div className="appt-type">
                {a.type === "Reunión Urgente" && "🚨"}
                {a.type === "Reunión General" && "📣"}
                {a.type === "Cita Individual" && "👥"} {a.type}
              </div>
              {a.status === "confirmed" && (
                <div className="appt-confirmed">✅ Asistencia Confirmada</div>
              )}
            </header>

            {/* Título */}
            <h3 className="appt-title">{a.title}</h3>

            {/* Detalles */}
            <ul className="appt-details">
              <li>📅 {a.date} • {a.time}</li>
              <li>📍 {a.location}</li>
              <li>📝 Motivo: {a.reason}</li>
              <li>👨‍🏫 Cita con: {a.organizer}</li>
            </ul>

            {/* Acciones */}
            {a.status === "pending" && (
              <div className="appt-actions">
                <button className="btn btn-success" onClick={() => confirm(a)}>
                  Confirmar Asistencia
                </button>
                <button className="btn btn-warn" onClick={() => reschedule(a)}>
                  Reprogramar
                </button>
              </div>
            )}

            {/* Reminders */}
            {a.reminders?.length > 0 && (
              <div className="appt-reminders">
                {a.reminders.map((r, i) => (
                  <div key={i} className="reminder-item">
                    {r}
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Configuración de recordatorios (sección simple) */}
      <section className="appt-config">
        <h2>Configuración de Recordatorios</h2>
        <div className="config-grid">
          <label className="config-item">
            <input type="checkbox" defaultChecked /> Recordatorios por SMS
          </label>
          <label className="config-item">
            <input type="checkbox" defaultChecked /> Recordatorios por Email
          </label>
          <label className="config-item">
            <input type="checkbox" /> Recordatorios por WhatsApp
          </label>

          <div className="config-item">
            Enviar recordatorios:
            <select defaultValue="2h" className="config-select">
              <option value="1h">1 hora antes</option>
              <option value="2h">2 horas antes</option>
              <option value="24h">24 horas antes</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}
