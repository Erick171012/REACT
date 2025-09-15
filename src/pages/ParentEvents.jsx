import Layout from "../components/Layout";

function EventCard({ date, month, title, time, place, action }) {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-slate-100 p-5 shadow-sm flex items-center gap-5">
      <div className="shrink-0 w-20 h-20 rounded-2xl bg-indigo-100 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-indigo-700">{date}</div>
        <div className="text-xs font-medium uppercase tracking-wide text-indigo-700">{month}</div>
      </div>
      <div className="flex-1">
        <div className="font-semibold text-slate-800">{title}</div>
        <div className="text-sm text-slate-600">{time}</div>
        <div className="text-sm text-slate-500">{place}</div>
      </div>
      <button className="rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 text-sm">{action}</button>
    </div>
  );
}

export default function ParentEvents() {
  return (
    <Layout onLogout={() => (window.location.href = "/")}>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Próximos Eventos</h1>

        <div className="space-y-4">
          <EventCard
            date="15"
            month="JUN"
            title="🎭 Festival de Talentos"
            time="2:00 PM - 6:00 PM"
            place="Auditorio Principal"
            action="Participar"
          />
          <EventCard
            date="20"
            month="JUN"
            title="📚 Feria del Libro"
            time="8:00 AM - 4:00 PM"
            place="Patio Central"
            action="Ver Más"
          />
        </div>
      </div>
    </Layout>
  );
}
