import React, { useState } from "react";
import "./ParentExcuses.css";

export default function ParentExcuses() {
  const [excuses, setExcuses] = useState([
    { date: "05 Oct 2025", reason: "Cita médica", status: "Aprobada", notes: "Revisada por coordinación." },
    { date: "07 Oct 2025", reason: "Dolor de cabeza", status: "Pendiente", notes: "En revisión." },
  ]);

  const [newExcuse, setNewExcuse] = useState({ date: "", reason: "", notes: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newExcuse.date || !newExcuse.reason) return alert("Por favor completa los campos obligatorios.");
    const updated = [
      ...excuses,
      { ...newExcuse, status: "Pendiente" },
    ];
    setExcuses(updated);
    setNewExcuse({ date: "", reason: "", notes: "" });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pendiente": return "status-pending";
      case "Aprobada": return "status-approved";
      case "Rechazada": return "status-rejected";
      default: return "";
    }
  };

  return (
    <div className="parent-excuses">
      <h1 className="page-title">Excusas Médicas</h1>
      <p className="page-subtitle">
        Envía y consulta las excusas médicas de <strong>Carlos González</strong>.
      </p>

      {/* Formulario de nueva excusa */}
      <form className="excuse-form" onSubmit={handleSubmit}>
        <h2>📄 Nueva Excusa</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Fecha de la ausencia *</label>
            <input
              type="date"
              value={newExcuse.date}
              onChange={(e) => setNewExcuse({ ...newExcuse, date: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Motivo *</label>
            <input
              type="text"
              placeholder="Ej: cita médica, fiebre, etc."
              value={newExcuse.reason}
              onChange={(e) => setNewExcuse({ ...newExcuse, reason: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Observaciones</label>
            <textarea
              placeholder="Detalles adicionales..."
              value={newExcuse.notes}
              onChange={(e) => setNewExcuse({ ...newExcuse, notes: e.target.value })}
              rows={3}
            />
          </div>

          <div className="form-group file-group">
            <label>Adjuntar archivo (opcional)</label>
            <button type="button" className="file-btn">📎 Seleccionar archivo</button>
          </div>
        </div>

        <button type="submit" className="submit-btn">Enviar Excusa</button>
      </form>

      {/* Tabla de excusas enviadas */}
      <div className="excuse-list">
        <h2>📋 Excusas Enviadas</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Motivo</th>
              <th>Estado</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {excuses.map((ex, i) => (
              <tr key={i}>
                <td>{ex.date}</td>
                <td>{ex.reason}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(ex.status)}`}>
                    {ex.status}
                  </span>
                </td>
                <td>{ex.notes || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}





