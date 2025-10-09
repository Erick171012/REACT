// src/pages/TeacherTasks.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import "./TeacherTasks.css";

export default function TeacherTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Campos del formulario
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const teacherUid = localStorage.getItem("uid");

  // 🔹 Cargar tareas del profesor desde Firestore
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (!teacherUid) return;
        const q = query(
          collection(db, "tasks"),
          where("teacherUid", "==", teacherUid)
        );
        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTasks(data);
      } catch (error) {
        console.error("Error al obtener tareas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [teacherUid]);

  // 🔹 Crear nueva tarea
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title || !subject || !grade || !dueDate) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    try {
      await addDoc(collection(db, "tasks"), {
        title,
        subject,
        grade,
        description,
        dueDate,
        status: "Pendiente",
        teacherUid,
        createdAt: Timestamp.now(),
      });

      alert("✅ Tarea creada correctamente.");
      setShowForm(false);
      setTitle("");
      setSubject("");
      setGrade("");
      setDescription("");
      setDueDate("");

      // Recargar tareas
      const q = query(
        collection(db, "tasks"),
        where("teacherUid", "==", teacherUid)
      );
      const querySnapshot = await getDocs(q);
      setTasks(querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (error) {
      console.error("Error al crear tarea:", error);
      alert("❌ Error al crear la tarea.");
    }
  };

  return (
    <div className="teacher-tasks">
      <h2 className="title">Gestionar Tareas</h2>
      <p className="subtitle">
        Crea, asigna y califica tareas para tus cursos.
      </p>

      <div className="actions">
        <button className="add-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancelar" : "+ Nueva Tarea"}
        </button>
      </div>

      {/* 🔹 Formulario para nueva tarea */}
      {showForm && (
        <form onSubmit={handleAddTask} className="task-form">
          <input
            type="text"
            placeholder="Título de la tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Asignatura"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Grado"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <button type="submit" className="add-btn">
            Guardar Tarea
          </button>
        </form>
      )}

      {/* 🔹 Tabla de tareas */}
      {loading ? (
        <p>Cargando tareas...</p>
      ) : tasks.length === 0 ? (
        <p>No hay tareas creadas todavía.</p>
      ) : (
        <div className="tasks-table">
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Asignatura</th>
                <th>Grado</th>
                <th>Fecha de Entrega</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t) => (
                <tr key={t.id}>
                  <td>{t.title}</td>
                  <td>{t.subject}</td>
                  <td>{t.grade}</td>
                  <td>{t.dueDate || "—"}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

