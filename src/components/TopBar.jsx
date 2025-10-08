import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./TopBarParent.css"; // ✅ Nuevo CSS separado

export default function TopBar({
  user = { name: "María González", role: "Padre de Familia" },
}) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (_) {}
    localStorage.removeItem("role");
    navigate("/", { replace: true });
  };

  return (
    <header className="parent-topbar">
      <div className="parent-topbar-content">
        {/* Izquierda: Título */}
        <div className="parent-topbar-left">
          <h2>Panel del Padre de Familia</h2>
        </div>

        {/* Derecha: Notificaciones + Usuario */}
        <div className="parent-topbar-right">
          {/* Notificación */}
          <button className="notif-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="notif-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10V7a2 2 0 10-4 0v3a2 2 0 01-2 2h8a2 2 0 01-2-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l1 9h12l1-9M9 13V7a3 3 0 116 0v6"
              />
            </svg>
            <span className="notif-badge">3</span>
          </button>

          {/* Usuario */}
          <div className="user-info">
            <div className="user-avatar">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-role">{user.role}</span>
            </div>
          </div>

          {/* Botón de Cerrar Sesión */}
          <button className="logout-btn" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}
