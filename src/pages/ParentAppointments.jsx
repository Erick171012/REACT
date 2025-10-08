import React, { useState } from "react";
import "./ParentAppointments.css";

export default function ParentAppointments() {
  const [appointments, setAppointments] = useState([
    { date: "08 Oct 2025", teacher: "Prof. Ana Gómez", reason: "Bajo rendimiento en Matemáticas", status: "Pendiente" },
    { date: "02 Oct 2025", teacher: "Coordinación Académica", reason: "Revisión de conducta", status: "Aprobada" },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    date: "",
    teacher: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newAppointment.date || !newAppointment.teacher || !newAppointment.reason) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const updated = [
      ...appointments,
      { ...newAppointment, status: "Pendiente" },
    ];
    setAppointments(updated);
    setNewAppointment({ date: "", teacher: "", reason: "" });
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
    <div className="parent-appointments">
      <h1 className="page-title">Solicitar Cita</h1>
      <p className="page-subtitle">
        Solicita reuniones con docentes o coordinación para <strong>Carlos González</strong>.
      </p>

      {/* Formulario nueva cita */}
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2>📅 Nueva Solicitud</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Fecha Deseada *</label>
            <input
              type="date"
              value={newAppointment.date}
              onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Dirigido a *</label>
            <select
              value={newAppointment.teacher}
              onChange={(e) => setNewAppointment({ ...newAppointment, teacher: e.target.value })}
              required
            >
              <option value="">Selecciona...</option>
              <option>Prof. Ana Gómez</option>
              <option>Prof. Juan Martínez</option>
              <option>Coordinación Académica</option>
              <option>Rectoría</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Motivo *</label>
            <textarea
              placeholder="Ej: deseo hablar sobre el progreso académico..."
              value={newAppointment.reason}
              onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })}
              rows={3}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Enviar Solicitud</button>
      </form>

      {/* Tabla citas */}
      <div className="appointment-list">
        <h2>📋 Historial de Solicitudes</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Dirigido a</th>
              <th>Motivo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr key={i}>
                <td>{a.date}</td>
                <td>{a.teacher}</td>
                <td>{a.reason}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(a.status)}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

