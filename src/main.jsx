import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// Layout global
import Layout from "./components/Layout";

// Páginas (padre)
import ParentHome from "./pages/ParentHome";
import ParentTasks from "./pages/ParentTasks";
import ParentSchedule from "./pages/ParentSchedule";
import ParentExcuses from "./pages/ParentExcuses";
import ParentAppointments from "./pages/ParentAppointments";
import ParentEvents from "./pages/ParentEvents";
import ParentComms from "./pages/ParentComms";

// Tu componente App con el diseño bonito
import App from "./App";

// --------- Helpers de ruta ----------
function Guard({ children }) {
  const role = localStorage.getItem("role");
  if (role !== "parent") return <Navigate to="/login" replace />;
  return children;
}

function HomeGate() {
  const role = localStorage.getItem("role");
  // Si ya está logueado, envía al dashboard padre; si no, muestra login
  return role === "parent" ? (
    <Navigate to="/parent" replace />
  ) : (
    <App />
  );
}

// ---------- Router ----------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Pública: landing/login */}
        <Route path="/" element={<HomeGate />} />
        <Route path="/login" element={<App />} />

        {/* Bloque del Padre (protegido + layout compartido) */}
        <Route
          element={
            <Guard>
              <Layout />
            </Guard>
          }
        >
          <Route path="/parent" element={<ParentHome />} />
          <Route path="/parent/tasks" element={<ParentTasks />} />
          <Route path="/parent/schedule" element={<ParentSchedule />} />
          <Route path="/parent/excuses" element={<ParentExcuses />} />
          <Route path="/parent/appointments" element={<ParentAppointments />} />
          <Route path="/parent/events" element={<ParentEvents />} />
          <Route path="/parent/comms" element={<ParentComms />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

