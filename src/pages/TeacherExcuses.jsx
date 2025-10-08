import "./TeacherExcuses.css";
import { useState } from "react";

export default function TeacherExcuses() {
  const [excuses, setExcuses] = useState([
    {
      id: 1,
      estudiante: "Carlos González",
      fecha: "08 Oct 2025",
      motivo: "Fiebre alta y reposo médico.",
      estado: "Pendiente",
    },
    {
      id: 2,
      estudiante: "María Torres",
      fecha: "07 Oct 2025",
      motivo: "Cita médica programada.",
      estado: "Aprobada",
    },
    {
      id: 3,
      estudiante: "Julián Pérez",
      fecha: "05 Oct 2025",
      motivo: "Ausencia por viaje familiar.",
      estado: "Rechazada",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setExcuses((prev) =>
      prev.map((exc) =>
        exc.id === id ? { ...exc, estado: newStatus } : exc
      )
    );
  };

  return (
    <div className="teacher-excuses">
      <h2 className="title">📄 Revisar Excusas</h2>
      <p className="subtitle">
        Aquí puedes revisar, aprobar o rechazar las excusas enviadas por los estudiantes.
      </p>

      <table className="excuses-table">
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Fecha</th>
            <th>Motivo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {excuses.map((e) => (
            <tr key={e.id}>
              <td>{e.estudiante}</td>
              <td>{e.fecha}</td>
              <td>{e.motivo}</td>
              <td>
                <span
                  className={`status ${
                    e.estado === "Aprobada"
                      ? "approved"
                      : e.estado === "Rechazada"
                      ? "rejected"
                      : "pending"
                  }`}
                >
                  {e.estado}
                </span>
              </td>
              <td>
                {e.estado === "Pendiente" ? (
                  <div className="action-buttons">
                    <button
                      className="btn-approve"
                      onClick={() => updateStatus(e.id, "Aprobada")}
                    >
                      ✅ Aprobar
                    </button>
                    <button
                      className="btn-reject"
                      onClick={() => updateStatus(e.id, "Rechazada")}
                    >
                      ❌ Rechazar
                    </button>
                  </div>
                ) : (
                  <span className="no-actions">Sin acción</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
