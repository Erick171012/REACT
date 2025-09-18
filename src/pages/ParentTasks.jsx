import { Tag } from "../components/Cards";

const items = [
  { subject: "Matemáticas", title: "Ejercicios Álgebra - Cap. 5", due: "Entrega: 20 Mayo", status: "Pendiente" },
  { subject: "Química", title: "Reporte de laboratorio", due: "Entrega: 22 Mayo", status: "En revisión" },
  { subject: "Lengua", title: "Ensayo de lectura", due: "Entrega: 25 Mayo", status: "Completada" },
];

export default function ParentTasks() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Tareas de mi Hijo</h1>

      <div className="space-y-3">
        {items.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl ring-1 ring-slate-100 p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-800">{t.title}</h3>
                  <Tag>{t.subject}</Tag>
                </div>
                <p className="text-sm text-slate-500 mt-1">{t.due}</p>
              </div>
              <div className="flex items-center gap-2">
                {t.status === "Pendiente" && <Tag color="yellow">Pendiente</Tag>}
                {t.status === "En revisión" && <Tag color="gray">En revisión</Tag>}
                {t.status === "Completada" && <Tag color="green">Completada</Tag>}
                <button className="rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm">Ver</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


