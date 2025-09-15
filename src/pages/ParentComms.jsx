import Layout from "../components/Layout";

export default function ParentComms() {
  return (
    <Layout onLogout={() => (window.location.href = "/")}>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Comunicación</h1>

        <div className="bg-white rounded-2xl ring-1 ring-slate-100 p-6 shadow-sm">
          <div className="text-5xl">💬</div>
          <h3 className="mt-2 text-xl font-semibold text-slate-800">Prof. Carlos Mendoza</h3>
          <div className="mt-1 text-sm text-slate-500">Hace 2 horas</div>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Excelente trabajo en el último examen de álgebra. Carlos mostró gran dedicación.
            <br /> Coordinación Académica
          </p>
          <p className="mt-3 text-slate-700">Recordamos que la reunión de padres será el próximo viernes a las 6:00 PM.</p>
        </div>
      </div>
    </Layout>
  );
}
