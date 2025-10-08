import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  ClipboardList,
  Calendar,
  FileText,
  Megaphone,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
  const menuItems = [
    { name: "Inicio", icon: <Home size={18} />, path: "/parent" },
    { name: "Tareas de mi Hijo", icon: <ClipboardList size={18} />, path: "/parent/tasks" },
    { name: "Horario", icon: <Calendar size={18} />, path: "/parent/schedule" },
    { name: "Excusas Médicas", icon: <FileText size={18} />, path: "/parent/excuses" },
    { name: "Citaciones", icon: <Megaphone size={18} />, path: "/parent/appointments" },
    { name: "Eventos", icon: <Sparkles size={18} />, path: "/parent/events" },
    { name: "Comunicación", icon: <MessageSquare size={18} />, path: "/parent/comms" },
  ];

  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <h1>Colegio Cooperativo</h1>
        <p>Agenda Estudiantil Digital</p>
      </div>

      {/* Menu */}
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <footer>
        <p>© 2025 Colegio Cooperativo</p>
      </footer>
    </aside>
  );
}

