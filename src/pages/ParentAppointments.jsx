import React, { useState } from "react";
import "./ParentAppointments.css";

export default function ParentAppointments() {
  const [appointments] = useState([
    { date: "08 Oct 2025", teacher: "Prof. Ana Gómez", reason: "Bajo rendimiento en Matemáticas", status: "Pendiente" },
    { date: "02 Oct 2025", teacher: "Coordinación Académica", reason: "Revisión de conducta", status: "Aprobada" },
  ]);

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
      <h1 className="page-title">Solicitudes de Citas</h1>
      <p className="page-subtitle">
        En esta sección puedes consultar las citas académicas registradas para tu acudido.  
        <br />
        <strong>Las nuevas solicitudes deben ser gestionadas por los docentes o la coordinación académica.</strong>
      </p>

      {/* Mensaje institucional */}
      <div className="notice-box">
        <h3>⚠️ Aviso Importante</h3>
        <p>
          Estimado padre de familia, el módulo de solicitud de citas está
          deshabilitado. Todas las reuniones deben ser programadas directamente
          por los docentes o la coordinación del Colegio Cooperativo Garzón.
        </p>
      </div>

      {/* Tabla de historial */}
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


