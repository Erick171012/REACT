import { useState } from "react";
import AuthForm from "./components/AuthForm";
import { useNavigate } from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState("login");
   const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden flex items-center justify-center p-4">
      
      {/* Círculos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-white opacity-5 rounded-full"></div>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-md">
        
        {/* Logo y título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4 shadow-lg">
            <span className="text-white text-2xl font-bold">CC</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Colegio Cooperativo</h1>
          <p className="text-blue-200 text-lg">Sistema de Gestión Estudiantil</p>
        </div>

        {/* Contenedor del formulario */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          
          {/* Pestañas de navegación */}
          <div className="grid grid-cols-2 gap-2 bg-gray-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setMode("login")}
              className={`py-2 rounded-lg transition ${
                mode === "login"
                  ? "bg-white shadow font-semibold text-blue-700"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setMode("register")}
              className={`py-2 rounded-lg transition ${
                mode === "register"
                  ? "bg-white shadow font-semibold text-blue-700"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              Registrarse
            </button>
          </div>

          {/* Formulario */}
          <AuthForm
  mode={mode}
  onSuccess={(role = "parent") => {
    localStorage.setItem("role", role);
    navigate("/parent", { replace: true });
    

  }}
/>


          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Colegio Cooperativo - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}

