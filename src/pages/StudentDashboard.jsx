import "./StudentDashboard.css";
import { BookOpen, ClipboardList, MessageSquare, CalendarDays } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <h2 className="title">📚 Panel Principal</h2>

      {/* Tarjetas superiores */}
      <div className="stats-grid">
        <div className="stat-card">
          <BookOpen className="icon purple" />
          <div className="info">
            <h3>8.5</h3>
            <p>Promedio General</p>
          </div>
        </div>

        <div className="stat-card">
          <ClipboardList className="icon blue" />
          <div className="info">
            <h3>3</h3>
            <p>Tareas Pendientes</p>
          </div>
        </div>

        <div className="stat-card">
          <CalendarDays className="icon green" />
          <div className="info">
            <h3>95%</h3>
            <p>Asistencia</p>
          </div>
        </div>

        <div className="stat-card">
          <MessageSquare className="icon pink" />
          <div className="info">
            <h3>2</h3>
            <p>Mensajes Nuevos</p>
          </div>
        </div>
      </div>

      {/* Actividades recientes */}
      <div className="activities">
        <h3>📅 Actividades Recientes</h3>

        <div className="activity-card">
          <div className="activity-info">
            <h4>Nueva tarea de Matemáticas</h4>
            <p>Ejercicios de álgebra – Capítulo 5</p>
            <span className="time">Hace 2 horas</span>
          </div>
          <span className="tag blue">Matemáticas</span>
        </div>

        <div className="activity-card">
          <div className="activity-info">
            <h4>Reunión de grupo</h4>
            <p>Organización del proyecto de ciencias</p>
            <span className="time">Ayer</span>
          </div>
          <span className="tag green">Ciencias</span>
        </div>

        <div className="activity-card">
          <div className="activity-info">
            <h4>Entrega de tarea de Inglés</h4>
            <p>Ensayo: “My Favorite Book”</p>
            <span className="time">Hace 3 días</span>
          </div>
          <span className="tag pink">Inglés</span>
        </div>
      </div>
    </div>
  );
}

