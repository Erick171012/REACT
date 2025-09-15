import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function DashboardLayout({ title = "", children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // El logout real ya lo puedes conectar a Firebase si quieres:
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#163880] via-[#1f49ad] to-[#2e67ff]">
      {/* Top bar */}
      <header className="bg-white/95 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-semibold">CC</div>
            <div>
              <h1 className="font-semibold text-gray-900 leading-5">Colegio Cooperativo</h1>
              <p className="text-xs text-gray-500 -mt-0.5">Agenda Estudiantil Digital</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 bg-white rounded-full px-3 py-1.5 border border-gray-200">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-700">Sesión activa</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-white bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-xl text-sm font-medium shadow-sm"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 md:col-span-3">
            <Sidebar />
          </aside>

          <main className="col-span-12 md:col-span-9">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl shadow-black/5 ring-1 ring-black/5">
              {title ? (
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                </div>
              ) : null}
              <div className="p-6">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
