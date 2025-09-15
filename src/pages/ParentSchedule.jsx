import Layout from "../components/Layout";

const monday = [
  { time: "7:00 - 8:00", subject: "Matemáticas", teacher: "Prof. Carlos Mendoza" },
  { time: "8:00 - 9:00", subject: "Química", teacher: "Prof. Ana Gómez" },
];

export default function ParentSchedule() {
  return (
    <Layout onLogout={() => (window.location.href = "/")}>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Mi Horario de Clases</h1>

        <div className="bg-white rounded-2xl ring-1 ring-slate-100 shadow-sm p-5">
          <h2 className="text-lg font-semibold text-slate-700 mb-3">Lunes</h2>
          <div className="space-y-3">
            {monday.map((row, i) => (
              <div key={i} className="rounded-xl bg-slate-50 px-4 py-3 flex items-center justify-between">
                <div className="text-slate-700 font-medium">{row.time}</div>
                <div className="text-slate-700">{row.subject}</div>
                <div className="text-sm text-slate-500">{row.teacher}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
