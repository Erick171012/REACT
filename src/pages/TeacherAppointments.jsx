import "./TeacherAppointments.css";
import { useState } from "react";

export default function TeacherAppointments() {
  const [selectedClass, setSelectedClass] = useState("7°A");
  const [selectedTarget, setSelectedTarget] = useState("grupo");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Lista simulada de estudiantes (luego puedes traerla de Firestore)
  const students = {
    "7°A": ["María Torres", "Carlos Gómez", "Julián Pérez"],
    "8°A": ["Laura Martínez", "Andrés Ramírez", "Paola García"],
    "9°B": ["Sofía Díaz", "Juan Herrera", "Tomás López"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!reason || !date || !time) {
      alert("⚠️ Completa todos los campos antes de enviar la citación.");
      return;
    }

    const destinatario =
      selectedTarget === "grupo"
        ? `todo el grupo ${selectedClass}`
        : selectedStudent || "—";

    alert(
      `✅ Citación enviada correctamente a ${destinatario}\n\n📅 ${date} - 🕒 ${time}\n\nMotivo: ${reason}`
    );

    // Reiniciar formulario
    setReason("");
    setDate("");
    setTime("");
    setSelectedTarget("grupo");
    setSelectedStudent("");
  };

  return (
    <div className="teacher-appointments">
      <h2 className="title">Enviar Citaciones</h2>
      <p className="subtitle">
        Envía citaciones a un curso completo o a un estudiante en particular.
      </p>

      <form className="appointment-form" onSubmit={handleSubmit}>
        {/* Selección de curso */}
        <div className="form-group">
          <label>Seleccionar curso:</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="7°A">7°A</option>
            <option value="8°A">8°A</option>
            <option value="9°B">9°B</option>
          </select>
        </div>

        {/* Destinatario */}
        <div className="form-group">
          <label>Enviar a:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="target"
                value="grupo"
                checked={selectedTarget === "grupo"}
                onChange={() => setSelectedTarget("grupo")}
              />
              Todo el grupo
            </label>
            <label>
              <input
                type="radio"
                name="target"
                value="estudiante"
                checked={selectedTarget === "estudiante"}
                onChange={() => setSelectedTarget("estudiante")}
              />
              Estudiante específico
            </label>
          </div>
        </div>

        {/* Selección de estudiante (solo si aplica) */}
        {selectedTarget === "estudiante" && (
          <div className="form-group">
            <label>Seleccionar estudiante:</label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
            >
              <option value="">Selecciona</option>
              {students[selectedClass].map((name, i) => (
                <option key={i} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Motivo */}
        <div className="form-group">
          <label>Motivo de la citación:</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Ejemplo: Comportamiento, rendimiento académico..."
            rows={3}
          />
        </div>

        {/* Fecha y hora */}
        <div className="form-row">
          <div className="form-group half">
            <label>Fecha:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group half">
            <label>Hora:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        {/* Botón de enviar */}
        <button type="submit" className="send-btn">
          🚀 Enviar Citación
        </button>
      </form>
    </div>
  );
}
