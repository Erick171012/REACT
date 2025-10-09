import React, { useState } from "react";
import "./TeacherAttendance.css";

export default function TeacherAttendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Carlos González", grade: "7°A", status: "Presente" },
    { id: 2, name: "María Torres", grade: "8°B", status: "Ausente" },
    { id: 3, name: "Julián Pérez", grade: "7°A", status: "Presente" },
  ]);

  const toggleStatus = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              status: s.status === "Presente" ? "Ausente" : "Presente",
            }
          : s
      )
    );
  };

  const handleSave = () => {
    console.log("Asistencia guardada:", students);
    alert("✅ Asistencia guardada correctamente");
  };

  return (
    <div className="teacher-attendance">
      <h2 className="title">
        <span className="icon">📋</span> Registro de Asistencia
      </h2>
      <p className="subtitle">
        Marca los estudiantes presentes o ausentes en tu clase de hoy.
      </p>

      <div className="attendance-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Curso</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>
                  <span
                    className={`status ${
                      student.status === "Presente"
                        ? "status-green"
                        : "status-red"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => toggleStatus(student.id)}
                    className={
                      student.status === "Presente"
                        ? "mark-absent"
                        : "mark-present"
                    }
                  >
                    {student.status === "Presente"
                      ? "Marcar Ausente"
                      : "Marcar Presente"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="save-section">
        <button className="save-btn" onClick={handleSave}>
          💾 Guardar Asistencia
        </button>
      </div>
    </div>
  );
}


