// src/pages/TeacherDashboard.jsx
import React from "react";
import "./TeacherDashboard.css";

export default function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      <h2 className="dashboard-title">Panel del Profesor</h2>
      <p className="dashboard-subtitle">
        Accede a las herramientas de gestión académica.
      </p>

      <div className="cards-container">
        <Card
          title="Mis Estudiantes"
          desc="Listado y perfil académico."
        />
        <Card
          title="Gestionar Tareas"
          desc="Crea, asigna y califica tareas."
        />
        <Card
          title="Asistencia"
          desc="Registra asistencia por curso."
        />
      </div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="teacher-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button>Entrar</button>
    </div>
  );
}

