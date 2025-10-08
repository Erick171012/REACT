import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Sidebar from "./Sidebar.jsx";

export default function Layout() {
  const handleLogout = () => {
    try {
      localStorage.removeItem("role");
    } catch {}
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar onLogout={handleLogout} />

      {/* Contenedor principal */}
      <div className="flex-1 flex flex-col">
        {/* TopBar */}
        <div className="sticky top-0 z-10 bg-white shadow-sm">
          <TopBar />
        </div>

        {/* Contenido */}
        <main className="flex-1 p-8 bg-gray-50">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 min-h-[calc(100vh-120px)] p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

