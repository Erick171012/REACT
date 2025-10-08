import "./TeacherAttendance.css";
import { useState } from "react";

export default function TeacherAttendance() {
  const [students, setStudents] = useState([
    { id: 1, nombre: "Carlos González", presente: true },
    { id: 2, nombre: "María Torres", presente: false },
    { id: 3, nombre: "Julián Pérez", presente: true },
  ]);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, presente: !s.presente } : s
      )
    );
  };

  const handleSave = () => {
    const presentes = students.filter((s) => s.presente).length;
    alert(`✅ Asistencia registrada: ${presentes}/${students.length} presentes.`);
  };

  return (
    <div className="teacher-attendance">
      <h2 className="title">📋 Registro de Asistencia</h2>
      <p className="subtitle">
        Marca los estudiantes presentes o ausentes en tu clase de hoy.
      </p>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.nombre}</td>
              <td>
                <span
                  className={`status ${
                    s.presente ? "present" : "absent"
                  }`}
                >
                  {s.presente ? "Presente" : "Ausente"}
                </span>
              </td>
              <td>
                <button
                  className={`btn-toggle ${
                    s.presente ? "btn-red" : "btn-green"
                  }`}
                  onClick={() => toggleAttendance(s.id)}
                >
                  {s.presente ? "Marcar Ausente" : "Marcar Presente"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="save-btn" onClick={handleSave}>
        💾 Guardar Asistencia
      </button>
    </div>
  );
}

