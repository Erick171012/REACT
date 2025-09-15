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
    <div className="min-h-screen bg-gray-50">
      {/* TopBar */}
      <TopBar onLogout={handleLogout} />

      {/* Contenido principal */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 p-6">
          <Sidebar />
        </div>

        {/* Área de contenido */}
        <div className="flex-1 p-6 pr-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 min-h-[calc(100vh-120px)]">
            <div className="p-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}