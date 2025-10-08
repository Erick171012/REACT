import React from "react";
import "./ParentTasks.css";

export default function ParentTasks() {
  const tasks = [
    {
      title: "Tarea de Matemáticas",
      subject: "Matemáticas",
      dueDate: "10 Oct 2025",
      status: "Pendiente",
    },
    {
      title: "Ensayo de Literatura",
      subject: "Lengua Castellana",
      dueDate: "12 Oct 2025",
      status: "En curso",
    },
    {
      title: "Proyecto de Ciencias",
      subject: "Ciencias Naturales",
      dueDate: "15 Oct 2025",
      status: "Entregada",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Pendiente":
        return "status-pending";
      case "En curso":
        return "status-progress";
      case "Entregada":
        return "status-done";
      default:
        return "";
    }
  };

  return (
    <div className="parent-tasks">
      <h1 className="page-title">Tareas Asignadas</h1>
      <p className="page-subtitle">
        Consulta las tareas enviadas a <strong>Carlos González</strong> por sus profesores.
      </p>

      <div className="tasks-table">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Asignatura</th>
              <th>Fecha de Entrega</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i}>
                <td>{task.title}</td>
                <td>{task.subject}</td>
                <td>{task.dueDate}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(task.status)}`}>
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}






