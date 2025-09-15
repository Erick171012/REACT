import {
  ClockIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  MegaphoneIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { StatCard, ActivityItem, Tag } from "../components/Cards";

export default function ParentDashboard() {
  const kpis = [
    { icon: <ClockIcon className="h-7 w-7 text-indigo-600" />, title: "Tiempo en plataforma", value: "3 horas" },
    { icon: <ClipboardDocumentCheckIcon className="h-7 w-7 text-indigo-600" />, title: "Tareas pendientes", value: "3" },
    { icon: <UserGroupIcon className="h-7 w-7 text-indigo-600" />, title: "Asistencia", value: "95%" },
  ];

  const actividades = [
    {
      icon: <DocumentTextIcon className="h-6 w-6 text-indigo-600" />,
      title: "Nueva tarea de Matemáticas",
      subtitle: "Ejercicios de álgebra — Capítulo 5 — Hace 2 horas",
      badge: <Tag>Matemáticas</Tag>,
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-emerald-600" />,
      title: "Calificación actualizada en Química",
      subtitle: "Examen parcial: 9.2 — Excelente trabajo — Ayer",
      badge: <Tag color="green">Química</Tag>,
    },
    {
      icon: <MegaphoneIcon className="h-6 w-6 text-rose-600" />,
      title: "Citación para reunión de padres",
      subtitle: "31 Mayo 15:00 — Coordinación — Hace 3 días",
      badge: <Tag color="red">Coordinación</Tag>,
    },
  ];

  const eventos = [
    {
      fecha: "15 JUN",
      title: "Festival de Talentos",
      hora: "2:00 PM - 6:00 PM · Auditorio Principal",
      chip: "Participar",
    },
    {
      fecha: "20 JUN",
      title: "Feria del Libro",
      hora: "8:00 AM - 4:00 PM · Patio Central",
      chip: "Ver Más",
    },
  ];

  return (
    <div className="space-y-8">
      {/* KPI cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {kpis.map((k, i) => (
          <StatCard key={i} icon={k.icon} title={k.title} value={k.value} />
        ))}
      </section>

      {/* Actividades recientes */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Actividades Recientes</h3>
        <div className="grid grid-cols-1 gap-4">
          {actividades.map((a, i) => (
            <ActivityItem key={i} icon={a.icon} title={a.title} subtitle={a.subtitle} badge={a.badge} />
          ))}
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Próximos Eventos</h3>
        <div className="grid grid-cols-1 gap-4">
          {eventos.map((ev, i) => (
            <div key={i} className="bg-white rounded-2xl ring-1 ring-slate-100 p-5 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-indigo-600 text-white flex flex-col items-center justify-center">
                  <span className="text-lg font-bold leading-5">{ev.fecha.split(" ")[0]}</span>
                  <span className="text-[10px] uppercase tracking-wider">{ev.fecha.split(" ")[1]}</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800 flex items-center gap-2">
                    <CalendarDaysIcon className="h-5 w-5 text-indigo-600" />
                    {ev.title}
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{ev.hora}</p>
                </div>
              </div>
              <button className="text-sm px-3 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">
                {ev.chip}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

