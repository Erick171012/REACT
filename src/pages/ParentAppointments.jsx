import Layout from "../components/Layout";
import { Tag } from "../components/Cards";

export default function ParentAppointments() {
  return (
    <Layout onLogout={() => (window.location.href = "/")}>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Citaciones y Recordatorios</h1>

        <div className="bg-rose-50 rounded-2xl ring-1 ring-rose-100 p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-slate-800">🔔 Reunión Urgente</h3>
              <p className="mt-1 font-medium text-slate-700">
                Reunión de Padres - Comportamiento Académico
              </p>
              <ul className="text-sm text-slate-600 mt-2 space-y-1">
                <li>📅 30 de mayo de 2025 • 3:00 PM</li>
                <li>📍 Aula 301 - Coordinación Académica</li>
                <li>📝 Motivo: Plan de mejoramiento</li>
              </ul>
              <div className="mt-3 flex gap-2">
                <button className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 text-sm">Confirmar Asistencia</button>
                <button className="rounded-md bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 text-sm">Reprogramar</button>
              </div>
              <div className="mt-3 text-sm text-slate-500">
                📬 Recordatorio enviado hace 3 días • Próximo recordatorio: Mañana 9:00 AM
              </div>
            </div>
            <Tag color="red">ALTA PRIORIDAD</Tag>
          </div>
        </div>
      </div>
    </Layout>
  );
}
