import React from "react";
import "./ParentSchedule.css";

export default function ParentSchedule() {
  const schedule = [
    { day: "Lunes", subject: "Matemáticas", time: "7:00 - 8:00 AM", room: "Aula 201" },
    { day: "Lunes", subject: "Lengua Castellana", time: "8:00 - 9:00 AM", room: "Aula 201" },
    { day: "Martes", subject: "Ciencias Naturales", time: "7:00 - 8:00 AM", room: "Aula 105" },
    { day: "Martes", subject: "Inglés", time: "8:00 - 9:00 AM", room: "Aula 102" },
    { day: "Miércoles", subject: "Educación Física", time: "9:00 - 10:00 AM", room: "Cancha" },
    { day: "Jueves", subject: "Sociales", time: "7:00 - 8:00 AM", room: "Aula 205" },
    { day: "Viernes", subject: "Arte", time: "9:00 - 10:00 AM", room: "Aula de Arte" },
  ];

  return (
    <div className="parent-schedule">
      <h1 className="page-title">Horario Semanal</h1>
      <p className="page-subtitle">
        Consulta el horario de clases de <strong>Carlos González</strong>.
      </p>

      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>Asignatura</th>
              <th>Hora</th>
              <th>Aula</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, i) => (
              <tr key={i}>
                <td>{item.day}</td>
                <td>
                  <span className={`subject-badge subject-${item.subject.toLowerCase().replace(/ /g, "-")}`}>
                    {item.subject}
                  </span>
                </td>
                <td>{item.time}</td>
                <td>{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



