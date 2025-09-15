import { useState } from "react";
import AuthForm from "./components/AuthForm";

export default function App() {
  const [mode, setMode] = useState("login"); // "login" | "register"

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2E6D] via-[#1E3A8A] to-[#2563EB] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-[#F3F4F6]">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#E8F0FF] flex items-center justify-center text-[#1E3A8A] font-bold">
            CC
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-[#1F2937]">Colegio Cooperativo</h1>
          <p className="text-[#6B7280]">Sistema de Gestión Estudiantil</p>
        </div>

        <div className="grid grid-cols-2 gap-2 bg-[#F3F4F6] rounded-xl p-1 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`py-2 rounded-lg transition ${
              mode === "login"
                ? "bg-white shadow font-semibold text-[#0B3B91]"
                : "text-[#6B7280] hover:text-[#0B3B91]"
            }`}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setMode("register")}
            className={`py-2 rounded-lg transition ${
              mode === "register"
                ? "bg-white shadow font-semibold text-[#0B3B91]"
                : "text-[#6B7280] hover:text-[#0B3B91]"
            }`}
          >
            Registrarse
          </button>
        </div>

        <AuthForm mode={mode} />

        <p className="mt-6 text-center text-xs text-[#9CA3AF]">
          © {new Date().getFullYear()} Colegio Cooperativo — Todos los derechos reservados
        </p>
      </div>
    </div>
  );
}




