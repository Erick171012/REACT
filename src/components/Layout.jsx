import React from "react";
import { Outlet } from "react-router-dom";

/** Barra superior y sidebar (los que ya tienes) */
import TopBar from "./TopBar.jsx";
import Sidebar from "./Sidebar.jsx";

/**
 * Layout base para el dashboard:
 * - TopBar fija arriba
 * - Sidebar a la izquierda (en md+)
 * - Contenido a la derecha con <Outlet />
 */
export default function Layout() {
  const handleLogout = () => {
    try {
      localStorage.removeItem("role");
    } catch {}
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600">
      {/* Topbar */}
      <TopBar onLogout={handleLogout} />

      {/* Contenido con sidebar */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <Sidebar />

          {/* Contenedor principal */}
          <main className="flex-1">
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4 md:p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
