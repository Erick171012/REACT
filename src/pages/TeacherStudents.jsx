// src/pages/TeacherStudents.jsx
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import "./TeacherStudents.css";

export default function TeacherStudents() {
  const [students, setStudents] = useState([]);

  // 🔥 Cargar estudiantes en tiempo real desde Firestore
  useEffect(() => {
    const q = query(collection(db, "users"), where("role", "==", "student"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(data);
    });

    return () => unsubscribe(); // limpiar el listener
  }, []);

  return (
    <div className="teacher-students">
      <h2 className="title">Mis Estudiantes</h2>
      <p className="subtitle">
        Consulta el listado de estudiantes y su desempeño académico.
      </p>

      <div className="students-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Grado</th>
              <th>Desempeño</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.grade || "—"}</td>
                  <td>
                    <span
                      className={`badge ${
                        s.performance === "Excelente"
                          ? "badge-green"
                          : s.performance === "Bueno"
                          ? "badge-blue"
                          : "badge-yellow"
                      }`}
                    >
                      {s.performance || "Sin datos"}
                    </span>
                  </td>
                  <td>
                    <button className="view-btn">Ver Perfil</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "1rem" }}>
                  No hay estudiantes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

