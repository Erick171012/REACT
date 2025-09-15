import Layout from "../components/Layout";
import { StatCard, ActivityItem, Tag } from "../components/Cards";

export default function ParentHome() {
  return (
    <Layout onLogout={() => (window.location.href = "/")}>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Director del panel</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard icon="⏰" title="TIEMPO EN PLATAFORMA" value="3 horas" />
          <StatCard icon="📋" title="TAREAS PENDIENTES" value="3" />
          <StatCard icon="👥" title="ASISTENCIA" value="95%" />
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">Actividades Recientes</h2>
          <div className="space-y-3">
            <ActivityItem
              icon="🧮"
              title="Nueva tarea de Matemáticas"
              badge="Matemáticas"
              subtitle="Ejercicios de álgebra - Capítulo 5 • Hace 2 horas"
            />
            <ActivityItem
              icon="🧪"
              title="Calificación actualizada en Química"
              badge={<Tag color="green">Química</Tag>}
              subtitle="Parcial 9.2 - Excelente trabajo • Ayer"
            />
            <ActivityItem
              icon="📣"
              title="Citacion para reunión de padres"
              badge={<Tag color="red">Coordinación</Tag>}
              subtitle="31 Mayo 15:00 • Confirmar asistencia"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
