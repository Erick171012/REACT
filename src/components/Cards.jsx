export function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-5 flex items-center gap-4">
      <div className="h-12 w-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">{icon}</div>
      <div>
        <div className="text-2xl font-bold text-slate-800 leading-6">{value}</div>
        <div className="text-sm text-slate-500">{title}</div>
      </div>
    </div>
  );
}

export function ActivityItem({ icon, title, subtitle, badge }) {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-slate-100 p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h4 className="font-semibold text-slate-800">{title}</h4>
            {badge && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700">{badge}</span>
            )}
          </div>
          <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export function Tag({ children, color = "indigo" }) {
  const map = {
    indigo: "bg-indigo-100 text-indigo-700",
    green: "bg-emerald-100 text-emerald-700",
    yellow: "bg-amber-100 text-amber-700",
    red: "bg-rose-100 text-rose-700",
    gray: "bg-slate-100 text-slate-600",
  };
  return <span className={`text-xs px-2.5 py-0.5 rounded-full ${map[color]}`}>{children}</span>;
}
