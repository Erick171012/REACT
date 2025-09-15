import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function TopBar({
  title = "",
  user = { name: "María González", role: "Padre de Familia" },
}) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (_) {
      // si falla igual limpiamos el estado local
    }
    localStorage.removeItem("role");
    navigate("/", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Marca / Logo + subtítulo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">
            CC
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-800">Colegio Cooperativo</div>
            <div className="text-xs text-slate-500 -mt-0.5">Agenda Estudiantil Digital</div>
          </div>
          {title ? (
            <span className="ml-4 pl-4 text-sm text-slate-500 border-l hidden sm:inline">
              {title}
            </span>
          ) : null}
        </div>

        {/* Estado de sesión + usuario + botón */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-sm">
            <span className="text-base">●</span> Sesión activa
          </div>

          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
              👤
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-slate-800">{user.name}</div>
              <div className="text-xs text-slate-500">{user.role}</div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="ml-2 rounded-md bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 text-sm font-medium shadow-sm"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
}


