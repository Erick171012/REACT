import "./TeacherSchedule.css";

export default function TeacherSchedule() {
  const schedule = [
    { day: "Lunes", subject: "Matemáticas", time: "7:00 a.m. - 8:30 a.m.", grade: "7°A" },
    { day: "Lunes", subject: "Ciencias Naturales", time: "9:00 a.m. - 10:30 a.m.", grade: "8°A" },
    { day: "Martes", subject: "Lengua Castellana", time: "8:00 a.m. - 9:30 a.m.", grade: "7°A" },
    { day: "Miércoles", subject: "Geografía", time: "10:00 a.m. - 11:30 a.m.", grade: "9°B" },
    { day: "Jueves", subject: "Matemáticas", time: "7:00 a.m. - 8:30 a.m.", grade: "7°B" },
    { day: "Viernes", subject: "Ciencias Naturales", time: "8:30 a.m. - 10:00 a.m.", grade: "8°A" },
  ];

  return (
    <div className="teacher-schedule">
      <h2 className="title">Mi Horario</h2>
      <p className="subtitle">
        Consulta tus clases asignadas por día, hora y curso correspondiente.
      </p>

      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>Asignatura</th>
              <th>Horario</th>
              <th>Grado</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((cls, index) => (
              <tr key={index}>
                <td>{cls.day}</td>
                <td>{cls.subject}</td>
                <td>{cls.time}</td>
                <td>{cls.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
