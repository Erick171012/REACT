import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Home,
  ClipboardList,
  Calendar,
  FileText,
  Users,
  Sparkles,
  MessageSquare,
  LogOut,
  Bell,
} from "lucide-react";
import "./ParentLayout.css";

export default function ParentLayout() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const menuItems = [
    { name: "Inicio", icon: <Home size={18} />, path: "/parent" },
    { name: "Tareas de mi Hijo", icon: <ClipboardList size={18} />, path: "/parent/tasks" },
    { name: "Horario", icon: <Calendar size={18} />, path: "/parent/schedule" },
    { name: "Excusas Médicas", icon: <FileText size={18} />, path: "/parent/excuses" },
    { name: "Citaciones", icon: <Users size={18} />, path: "/parent/appointments" },
    { name: "Eventos", icon: <Sparkles size={18} />, path: "/parent/events" },
    { name: "Comunicación", icon: <MessageSquare size={18} />, path: "/parent/messages" },
  ];

  // Simulación temporal (en el futuro se conecta a Firestore)
  const parent = {
    name: "María González",
    role: "Padre de Familia",
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
    <div className="parent-layout">
      {/* Sidebar lateral */}
      <aside className="parent-sidebar">
        <div className="brand">
          <h1>Colegio Cooperativo</h1>
          <p>Agenda Estudiantil Digital</p>
        </div>

        {/* Navegación */}
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

        {/* Cerrar sesión */}
        <div className="logout">
          <button onClick={handleLogout}>
            <LogOut size={18} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Área principal */}
      <main className="parent-main">
        <header className="parent-header">
          <div className="left">
            <Bell size={18} />
            Panel del Padre de Familia
          </div>

          <div className="profile">
            <div className="avatar">{getInitials(parent.name)}</div>
            <div className="info">
              <p className="name">{parent.name}</p>
              <p className="role">{parent.role}</p>
            </div>
          </div>
        </header>

        {/* Contenido dinámico */}
        <div className="parent-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}


