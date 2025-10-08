import "./TeacherStudents.css";

export default function TeacherStudents() {
  const students = [
    { id: 1, name: "Carlos González", grade: "7°A", performance: "Excelente" },
    { id: 2, name: "María Torres", grade: "7°A", performance: "Bueno" },
    { id: 3, name: "Julián Pérez", grade: "7°A", performance: "Regular" },
  ];

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
              <th>Grado</th>
              <th>Desempeño</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.grade}</td>
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
                    {s.performance}
                  </span>
                </td>
                <td>
                  <button className="view-btn">Ver Perfil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
