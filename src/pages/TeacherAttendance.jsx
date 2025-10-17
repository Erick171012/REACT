import React, { useState } from "react";
import "./TeacherAttendance.css";

export default function TeacherAttendance() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "Carlos González", grade: "7°A", status: "Presente" },
    { id: 2, name: "María Torres", grade: "8°B", status: "Ausente" },
    { id: 3, name: "Julián Pérez", grade: "7°A", status: "Presente" },
  ]);

  const courses = [...new Set(students.map((s) => s.grade))]; // Cursos únicos

  const toggleStatus = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "Presente" ? "Ausente" : "Presente" }
          : s
      )
    );
  };

  const handleSave = () => {
    const filtered = students.filter((s) => s.grade === selectedCourse);
    console.log("Asistencia guardada:", filtered);
    alert(`✅ Asistencia del curso ${selectedCourse} guardada correctamente`);
  };

  const filteredStudents = students.filter(
    (s) => !selectedCourse || s.grade === selectedCourse
  );

  return (
    <div className="teacher-attendance">
      <h2 className="title">
        <span className="icon">📋</span> Registro de Asistencia
      </h2>
      <p className="subtitle">
        Marca los estudiantes presentes o ausentes en tu clase de hoy.
      </p>

      {/* Selector de curso */}
      <div className="filter-section">
        <label htmlFor="course-select">Selecciona el curso:</label>
        <select
          id="course-select"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">-- Elegir curso --</option>
          {courses.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Tabla solo si hay curso seleccionado */}
      {selectedCourse ? (
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
              {filteredStudents.map((student) => (
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
      ) : (
        <p className="no-course">👆 Selecciona un curso para ver los estudiantes</p>
      )}

      {selectedCourse && (
        <div className="save-section">
          <button className="save-btn" onClick={handleSave}>
            💾 Guardar Asistencia
          </button>
        </div>
      )}
    </div>
  );
}



