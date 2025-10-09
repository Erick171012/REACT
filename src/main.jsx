import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// Layouts
import ParentLayout from "./layouts/ParentLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout"; // ✅ nuevo import

// Páginas del padre
import ParentHome from "./pages/ParentHome";
import ParentTasks from "./pages/ParentTasks";
import ParentSchedule from "./pages/ParentSchedule";
import ParentExcuses from "./pages/ParentExcuses";
import ParentAppointments from "./pages/ParentAppointments";
import ParentEvents from "./pages/ParentEvents";
import ParentComms from "./pages/ParentComms";

// Páginas del profesor
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherStudents from "./pages/TeacherStudents";
import TeacherTasks from "./pages/TeacherTasks";
import TeacherSchedule from "./pages/TeacherSchedule";
import TeacherExcuses from "./pages/TeacherExcuses";
import TeacherAttendance from "./pages/TeacherAttendance";
import TeacherAppointments from "./pages/TeacherAppointments";
import TeacherComms from "./pages/TeacherComms";

// Páginas del estudiante
import StudentDashboard from "./pages/StudentDashboard";
import StudentTasks from "./pages/StudentTasks";
import StudentSchedule from "./pages/StudentSchedule";
import StudentEvents from "./pages/StudentEvents";
import StudentMessages from "./pages/StudentMessages";

// App login/landing
import App from "./App";

// ---------- Helpers de ruta ----------
function GuardParent({ children }) {
  const role = localStorage.getItem("role");
  if (role !== "parent") return <Navigate to="/login" replace />;
  return children;
}

function GuardTeacher({ children }) {
  const role = localStorage.getItem("role");
  if (role !== "teacher") return <Navigate to="/login" replace />;
  return children;
}

// ✅ Nuevo guard para estudiante
function GuardStudent({ children }) {
  const role = localStorage.getItem("role");
  if (role !== "student") return <Navigate to="/login" replace />;
  return children;
}

// ---------- Redirección inicial ----------
function HomeGate() {
  const role = localStorage.getItem("role");
  if (role === "parent") return <Navigate to="/parent" replace />;
  if (role === "teacher") return <Navigate to="/teacher" replace />;
  if (role === "student") return <Navigate to="/student" replace />; // ✅ añadido
  return <App />;
}

// ---------- Router principal ----------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Pública: login */}
        <Route path="/" element={<HomeGate />} />
        <Route path="/login" element={<App />} />

        {/* Bloque PADRE */}
        <Route
          element={
            <GuardParent>
              <ParentLayout />
            </GuardParent>
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

        {/* Bloque PROFESOR */}
        <Route
          element={
            <GuardTeacher>
              <TeacherLayout />
            </GuardTeacher>
          }
        >
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/students" element={<TeacherStudents />} />
          <Route path="/teacher/tasks" element={<TeacherTasks />} />
          <Route path="/teacher/schedule" element={<TeacherSchedule />} />
          <Route path="/teacher/excuses" element={<TeacherExcuses />} />
          <Route path="/teacher/attendance" element={<TeacherAttendance />} />
          <Route path="/teacher/appointments" element={<TeacherAppointments />} />
          <Route path="/teacher/comms" element={<TeacherComms />} />
        </Route>

        {/* ✅ Bloque ESTUDIANTE */}
        <Route
          element={
            <GuardStudent>
              <StudentLayout />
            </GuardStudent>
          }
        >
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/tasks" element={<StudentTasks />} />
          <Route path="/student/schedule" element={<StudentSchedule />} />
          <Route path="/student/events" element={<StudentEvents />} />
          <Route path="/student/messages" element={<StudentMessages />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);









