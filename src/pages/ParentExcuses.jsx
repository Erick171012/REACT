// src/pages/ParentExcuses.jsx
import "./ParentExcuses.css";

const excuses = [
  {
    title: "Incapacidad Médica",
    student: "Carlos González Pérez",
    date: "27–29 mayo 2025",
    reason: "Gripe común con fiebre alta",
    center: "Dr. Roberto Méndez - Centro Médico San Juan",
    status: "En revisión",
  },
  {
    title: "Cita Médica",
    student: "Carlos González Pérez",
    date: "14 mayo 2025",
    reason: "Control general",
    center: "IPS Salud Vida",
    status: "Aprobada",
  },
];

export default function ParentExcuses() {
  return (
    <div className="excuses-container">
      {/* Encabezado */}
      <div className="excuses-header">
        <h1>Excusas Médicas</h1>
        <button className="btn-new-excuse">+ Nueva Excusa</button>
      </div>

      {/* Lista de excusas */}
      {excuses.map((e, i) => (
        <div key={i} className="excuse-card">
          <div>
            <h3>🗂 {e.title}</h3>
            <div className="excuse-details">
              <p>
                <b>Estudiante:</b> {e.student}
              </p>
              <p>
                <b>Fecha:</b> {e.date}
              </p>
              <p>
                <b>Motivo:</b> {e.reason}
              </p>
              <p>
                <b>Dr./Centro:</b> {e.center}
              </p>
            </div>

            <div className="excuse-actions">
              <button className="btn-doc">Ver documento</button>
              <button className="btn-edit">Editar</button>
            </div>
          </div>

          {/* Estado dinámico */}
          <div
            className={`excuse-status ${
              e.status === "En revisión" ? "status-review" : "status-approved"
            }`}
          >
            {e.status.toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  );
}




