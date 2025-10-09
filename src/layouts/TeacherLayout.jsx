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
import React from "react";

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

  // Simulación temporal (cuando conectemos Firestore esto será dinámico)
  const teacher = {
    name: "Prof. Ana Gómez",
    role: "Profesor",
  };

  // Iniciales del avatar
  const getInitials = (name) => {
    if (!name) return "CC";
    const parts = name.trim().split(" ");
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : (parts[0][0] + parts[1][0]).toUpperCase();
  };

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

      {/* Área principal */}
      <main className="teacher-main">
        <header className="teacher-header">
          <div className="left">
            <Bell size={18} />
            Panel del Profesor
          </div>

          <div className="profile">
            <div className="avatar">{getInitials(teacher.name)}</div>
            <div className="info">
              <p className="name">{teacher.name}</p>
              <p className="role">{teacher.role}</p>
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

