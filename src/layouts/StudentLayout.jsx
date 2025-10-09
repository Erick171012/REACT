import "./StudentLayout.css";
import { NavLink, Outlet } from "react-router-dom";
import {
  Home,
  ClipboardList,
  Calendar,
  MessageSquare,
  Sparkles,
  LogOut,
  Bell,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Asegúrate que la ruta es correcta según tu estructura

export default function StudentLayout() {
  const [student, setStudent] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      const uid = localStorage.getItem("uid");
      if (!uid) return;

      try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStudent(docSnap.data());
        }
      } catch (error) {
        console.error("Error obteniendo los datos del estudiante:", error);
      }
    };

    fetchStudentData();
  }, []);

  const menuItems = [
    { name: "Inicio", icon: <Home size={18} />, path: "/student" },
    { name: "Mis Tareas", icon: <ClipboardList size={18} />, path: "/student/tasks" },
    { name: "Mi Horario", icon: <Calendar size={18} />, path: "/student/schedule" },
    { name: "Eventos", icon: <Sparkles size={18} />, path: "/student/events" },
    { name: "Mensajes", icon: <MessageSquare size={18} />, path: "/student/messages" },
  ];

  // Obtener iniciales para el avatar
  const getInitials = (name) => {
    if (!name) return "CC";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <div className="student-layout">
      {/* Sidebar */}
      <aside className="student-sidebar">
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
      <main className="student-main">
        <header className="student-header">
          <div className="left">
            <Bell size={18} />
            Panel del Estudiante
          </div>

          <div className="profile">
            <div className="avatar">
              {getInitials(student?.name)}
            </div>
            <div className="info">
              <p className="name">{student ? student.name : "Cargando..."}</p>
              <p className="role">{student ? student.role : "Estudiante"}</p>
            </div>
          </div>
        </header>

        <div className="student-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}


