import React from "react";
import "./ParentDashboard.css";

export default function ParentDashboard() {
  const data = {
    student: "Carlos González",
    tasksAssigned: 8,
    tasksCompleted: 5,
    tasksPending: 3,
    attendance: 92,
  };

  const recentActivities = [
    {
      id: 1,
      title: "Nueva tarea de Matemáticas",
      detail: "Tapa 5 Álgebra: pág. 45 (vence mañana)",
      teacher: "Profesor Carlos",
      date: "07 Oct 2025",
    },
    {
      id: 2,
      title: "Excusa médica aprobada",
      detail: "Reposo de 2 días por fiebre alta.",
      teacher: "Coordinación Académica",
      date: "06 Oct 2025",
    },
    {
      id: 3,
      title: "Cita confirmada",
      detail: "Reunión con el profesor de Lengua Castellana",
      teacher: "Prof. Ana Gómez",
      date: "05 Oct 2025",
    },
  ];

  return (
    <div className="parent-dashboard">
      <h1 className="page-title">Panel del Padre de Familia</h1>
      <p className="page-subtitle">
        Seguimiento académico de <strong>{data.student}</strong>
      </p>

      {/* Resumen general */}
      <div className="summary-grid">
        <div className="summary-card">
          <h3>Tareas Asignadas</h3>
          <p className="value">{data.tasksAssigned}</p>
          <p className="desc">+2 esta semana</p>
        </div>

        <div className="summary-card">
          <h3>Completadas</h3>
          <p className="value success">{data.tasksCompleted}</p>
          <p className="desc">{(data.tasksCompleted / data.tasksAssigned * 100).toFixed(1)}% de progreso</p>
        </div>

        <div className="summary-card">
          <h3>Pendientes</h3>
          <p className="value warning">{data.tasksPending}</p>
          <p className="desc">1 vence pronto</p>
        </div>

        <div className="summary-card">
          <h3>Asistencia</h3>
          <p className="value success">{data.attendance}%</p>
          <p className="desc">{data.attendance > 90 ? "Excelente" : "Regular"}</p>
        </div>
      </div>

      {/* Actividades recientes */}
      <div className="activities-section">
        <h2>Actividades recientes</h2>

        <div className="activities-list">
          {recentActivities.map((act) => (
            <div key={act.id} className="activity-card">
              <div className="activity-info">
                <h4>{act.title}</h4>
                <p>{act.detail}</p>
                <span className="teacher">{act.teacher}</span>
              </div>
              <span className="date">{act.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


