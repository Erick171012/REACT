import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import TopBar from "../components/TopBar.jsx";
import "./ParentLayout.css"; // ✅ corregido: está en la misma carpeta

export default function ParentLayout() {
  const handleLogout = () => {
    try {
      localStorage.removeItem("role");
    } catch {}
    window.location.href = "/";
  };

  return (
    <div className="parent-layout">
      {/* Sidebar fijo a la izquierda */}
      <aside className="parent-sidebar">
        <div className="brand">
          <h1>Colegio Cooperativo</h1>
          <p>Agenda Estudiantil Digital</p>
        </div>

        {/* Menú de navegación */}
        <Sidebar />

        {/* Pie del sidebar */}
        <footer className="logout">
          <button onClick={handleLogout}>Cerrar Sesión</button>
          <p>© 2025 Colegio Cooperativo</p>
        </footer>
      </aside>

      {/* Contenido principal */}
      <main className="parent-main">
        <header className="topbar-container">
          <TopBar />
        </header>

        <section className="parent-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}


