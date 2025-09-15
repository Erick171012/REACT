import Layout from "../components/Layout";
import { Tag } from "../components/Cards";

const excuses = [
  {
    title: "Incapacidad Médica",
    student: "Carlos González Pérez",
    date: "27–29 mayo 2025",
    reason: "Gripe común con fiebre alta",
    center: "Dr. Roberto Méndez - Centro Médico San Juan",
    status: "En revisión",
  },
  {
    title: "Cita Médica",
    student: "Carlos González Pérez",
    date: "14 mayo 2025",
    reason: "Control general",
    center: "IPS Salud Vida",
    status: "Aprobada",
  },
];

export default function ParentExcuses() {
  return (
    <Layout onLogout={() => (window.location.href = "/")}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Excusas Médicas</h1>
          <button className="rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm">+ Nueva Excusa</button>
        </div>

        <div className="space-y-4">
          {excuses.map((e, i) => (
            <div key={i} className="bg-white rounded-2xl ring-1 ring-slate-100 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">🗂 {e.title}</h3>
                  <p className="text-sm text-slate-600"><b>Estudiante:</b> {e.student}</p>
                  <p className="text-sm text-slate-600"><b>Fecha:</b> {e.date}</p>
                  <p className="text-sm text-slate-600"><b>Motivo:</b> {e.reason}</p>
                  <p className="text-sm text-slate-600"><b>Dr./Centro:</b> {e.center}</p>
                  <div className="mt-3 flex gap-2">
                    <button className="rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 text-sm">Ver Documento</button>
                    <button className="rounded-md bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 text-sm">Editar</button>
                  </div>
                </div>
                <div>
                  {e.status === "En revisión" && <Tag color="yellow">EN REVISIÓN</Tag>}
                  {e.status === "Aprobada" && <Tag color="green">APROBADA</Tag>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
