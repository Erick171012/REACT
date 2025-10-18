import React, { useState } from "react";
import "./TeacherAppointments.css";

export default function TeacherAppointments() {
  const [recipientType, setRecipientType] = useState("curso");
  const [course, setCourse] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentStudent, setParentStudent] = useState("");
  const [parentGrade, setParentGrade] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="appointments-container">
      <h2>Enviar Citaciones</h2>
      <p className="subtitle">
        Envía citaciones a un curso completo, a un estudiante o a un padre de familia.
      </p>

      <form className="appointment-form" onSubmit={handleSubmit}>
        {/* Tipo de destinatario */}
        <label>Tipo de destinatario:</label>
        <select
          value={recipientType}
          onChange={(e) => setRecipientType(e.target.value)}
        >
          <option value="curso">Curso completo</option>
          <option value="estudiante">Estudiante</option>
          <option value="padre">Padre de familia</option>
        </select>

        {/* Curso */}
        {recipientType === "curso" && (
          <>
            <label>Curso:</label>
            <select value={course} onChange={(e) => setCourse(e.target.value)} required>
              <option value="">Selecciona un curso</option>
              <option value="6A">6°A</option>
              <option value="7B">7°B</option>
              <option value="8A">8°A</option>
              <option value="9B">9°B</option>
            </select>
          </>
        )}

        {/* Estudiante */}
        {recipientType === "estudiante" && (
          <>
            <label>Nombre del estudiante:</label>
            <input
              type="text"
              placeholder="Nombre completo del estudiante"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />

            <label>Grado / Curso:</label>
            <select
              value={studentGrade}
              onChange={(e) => setStudentGrade(e.target.value)}
              required
            >
              <option value="">Selecciona el grado</option>
              <option value="6A">6°A</option>
              <option value="7A">7°A</option>
              <option value="8A">8°A</option>
              <option value="9B">9°B</option>
            </select>
          </>
        )}

        {/* Padre */}
        {recipientType === "padre" && (
          <>
            <label>Nombre del padre o madre:</label>
            <input
              type="text"
              placeholder="Nombre completo del acudiente"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              required
            />

            <label>Estudiante asociado:</label>
            <input
              type="text"
              placeholder="Nombre completo del estudiante"
              value={parentStudent}
              onChange={(e) => setParentStudent(e.target.value)}
              required
            />

            <label>Grado / Curso del estudiante:</label>
            <select
              value={parentGrade}
              onChange={(e) => setParentGrade(e.target.value)}
              required
            >
              <option value="">Selecciona el grado</option>
              <option value="6A">6°A</option>
              <option value="7A">7°A</option>
              <option value="8A">8°A</option>
              <option value="9B">9°B</option>
            </select>
          </>
        )}

        {/* Mensaje */}
        <label>Mensaje de citación:</label>
        <textarea
          placeholder="Escribe el motivo o mensaje de la citación..."
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="send-btn">
          ✉️ Enviar Citación
        </button>

        {success && (
          <div className="success-message">
            ✅ Citación enviada correctamente.
          </div>
        )}
      </form>
    </div>
  );
}

