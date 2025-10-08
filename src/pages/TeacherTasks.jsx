import "./TeacherTasks.css";

export default function TeacherTasks() {
  const tasks = [
    { id: 1, title: "Tarea de Matemáticas", subject: "Matemáticas", due: "10 Oct 2025", status: "Pendiente" },
    { id: 2, title: "Ensayo de Literatura", subject: "Lengua Castellana", due: "12 Oct 2025", status: "En curso" },
    { id: 3, title: "Proyecto de Ciencias", subject: "Ciencias Naturales", due: "15 Oct 2025", status: "Entregada" },
  ];

  return (
    <div className="teacher-tasks">
      <h2 className="title">Gestionar Tareas</h2>
      <p className="subtitle">Crea, asigna y califica tareas para tus cursos.</p>

      <div className="actions">
        <button className="add-btn">+ Nueva Tarea</button>
      </div>

      <div className="tasks-table">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Asignatura</th>
              <th>Fecha de Entrega</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.id}>
                <td>{t.title}</td>
                <td>{t.subject}</td>
                <td>{t.due}</td>
                <td>
                  <span
                    className={`status ${
                      t.status === "Pendiente"
                        ? "status-yellow"
                        : t.status === "En curso"
                        ? "status-blue"
                        : "status-green"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
                <td>
                  <button className="edit-btn">Editar</button>
                  <button className="delete-btn">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
