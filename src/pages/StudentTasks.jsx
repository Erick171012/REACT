import React, { useEffect, useState } from "react";
import "./StudentTasks.css";
import { ClipboardList, CheckCircle2, Clock, CalendarDays } from "lucide-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase"; // Ajusta si tu archivo de Firebase tiene otra ruta

export default function StudentTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const uid = localStorage.getItem("uid"); // guardado en login
        const q = query(collection(db, "tasks"), where("studentUid", "==", uid));
        const querySnapshot = await getDocs(q);

        const taskData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTasks(taskData);
      } catch (error) {
        console.error("Error obteniendo tareas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="student-tasks">
      <h2 className="title">
        <ClipboardList className="icon" /> Mis Tareas
      </h2>

      {loading ? (
        <p className="loading">Cargando tareas...</p>
      ) : tasks.length === 0 ? (
        <p className="no-tasks">No tienes tareas asignadas por el momento.</p>
      ) : (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-card ${
                task.status === "Completada"
                  ? "completed"
                  : task.status === "Pendiente"
                  ? "pending"
                  : "in-progress"
              }`}
            >
              <div className="task-header">
                <h3>{task.title}</h3>
                <span className={`status ${task.status.toLowerCase()}`}>
                  {task.status}
                </span>
              </div>

              <p className="subject">{task.subject}</p>
              <p className="desc">{task.description}</p>

              <div className="task-footer">
                <span className="date">
                  <CalendarDays size={14} /> Entrega: {task.dueDate}
                </span>
                {task.status === "Completada" ? (
                  <CheckCircle2 className="done-icon" />
                ) : (
                  <Clock className="pending-icon" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

