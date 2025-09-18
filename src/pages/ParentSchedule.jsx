// ParentSchedule.jsx
const monday = [
  { time: "7:00 - 8:00", subject: "Matemáticas", teacher: "Prof. Carlos Mendoza" },
  { time: "8:00 - 9:00", subject: "Química", teacher: "Prof. Ana Gómez" },
];

function Row({ time, subject, teacher }) {
  return (
    <div className="rounded-xl bg-white ring-1 ring-slate-200 px-4 py-3 sm:px-5 shadow-sm
                    flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2
                    hover:ring-indigo-300 transition">
      {/* Hora */}
      <div className="flex items-center gap-3 min-w-[150px]">
        <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          🕘
        </span>
        <span className="font-semibold text-slate-800 tabular-nums">{time}</span>
      </div>

      {/* Materia */}
      <div className="flex-1 text-slate-700 sm:text-center">{subject}</div>

      {/* Profesor */}
      <div className="sm:w-72">
        <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full
                         bg-slate-100 text-slate-600">
          <span className="opacity-70">👨‍🏫</span>
          {teacher}
        </span>
      </div>
    </div>
  );
}

export default function ParentSchedule() {
  return (
    <div className="space-y-8">
      {/* Título */}
      <div className="flex items-center gap-3">
        <span className="text-indigo-600 text-2xl">📅</span>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Mi horario de clases</h1>
      </div>

      {/* Lunes */}
      <section className="bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-lg font-semibold text-slate-800">Lunes</h2>
          <span className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">
            {monday.length} clases
          </span>
        </div>

        <div className="space-y-3">
          {monday.map((r, i) => (
            <Row key={i} {...r} />
          ))}
        </div>
      </section>
    </div>
  );
}


