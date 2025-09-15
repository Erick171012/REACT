import TopBar from "../components/TopBar";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2E6D] via-[#1E3A8A] to-[#2563EB] p-6">
      <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <TopBar title="Profesor" />
        <div className="p-8 grid gap-6 md:grid-cols-3">
          <Card title="Mis Estudiantes" desc="Listado y perfil académico." />
          <Card title="Gestionar Tareas" desc="Crea, asigna y califica tareas." />
          <Card title="Asistencia" desc="Registra asistencia por curso." />
        </div>
      </div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-[#EEF2FF] p-6 shadow-sm">
      <h3 className="font-semibold text-[#1F2937]">{title}</h3>
      <p className="text-sm text-[#6B7280] mt-1">{desc}</p>
      <button className="mt-4 px-3 py-2 rounded-xl bg-[#1E40AF] text-white text-sm hover:bg-[#1E3A8A]">
        Entrar
      </button>
    </div>
  );
}
