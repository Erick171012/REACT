import "./TeacherLayout.css";
import { NavLink, Outlet } from "react-router-dom";
import {
  Home,
  Users,
  ClipboardList,
  Calendar,
  FileText,
  CheckSquare,
  Megaphone,
  MessageSquare,
  Bell,
  LogOut,
} from "lucide-react";

export default function TeacherLayout() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const menuItems = [
    { name: "Inicio", icon: <Home size={18} />, path: "/teacher" },
    { name: "Mis Estudiantes", icon: <Users size={18} />, path: "/teacher/students" },
    { name: "Gestionar Tareas", icon: <ClipboardList size={18} />, path: "/teacher/tasks" },
    { name: "Mi Horario", icon: <Calendar size={18} />, path: "/teacher/schedule" },
    { name: "Revisar Excusas", icon: <FileText size={18} />, path: "/teacher/excuses" },
    { name: "Asistencia", icon: <CheckSquare size={18} />, path: "/teacher/attendance" },
    { name: "Enviar Citas", icon: <Megaphone size={18} />, path: "/teacher/appointments" },
    { name: "Comunicación", icon: <MessageSquare size={18} />, path: "/teacher/comms" },
  ];

  return (
    <div className="teacher-layout">
      {/* Sidebar */}
      <aside className="teacher-sidebar">
        <div className="brand">
          <h1>Colegio Cooperativo</h1>
          <p>Agenda Estudiantil Digital</p>
        </div>

        <nav>
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="logout">
          <button onClick={handleLogout}>
            <LogOut size={18} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="teacher-main">
        <header className="teacher-header">
          <div className="left">
            <Bell size={18} />
            Panel del Profesor
          </div>

          <div className="profile">
            <div className="avatar">AG</div>
            <div className="info">
              <p className="name">Prof. Ana Gómez</p>
              <p className="role">Profesor</p>
            </div>
          </div>
        </header>

        <div className="teacher-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
