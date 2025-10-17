import { useState } from "react";
import AuthForm from "./components/AuthForm";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        localStorage.setItem("uid", user.uid);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);

        if (data.role === "student") navigate("/student");
        else if (data.role === "teacher") navigate("/teacher");
        else if (data.role === "parent") navigate("/parent");
        else alert("Rol no reconocido en el sistema.");
      } else {
        alert("No se encontró el usuario en Firestore.");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error.message);
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg,   #043073ff 100%)",
      }}
    >
      {/* Círculos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-white opacity-5 rounded-full"></div>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #102d6a, #17429c)",
            }}
          >
            <span className="text-white text-2xl font-bold">CC</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Colegio Cooperativo</h1>
          <p className="text-blue-200 text-lg">Sistema de Gestión Estudiantil</p>
        </div>

        {/* Contenedor del formulario */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Tabs */}
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
            onLogin={handleLogin}
            onSuccess={(role) => {
              localStorage.setItem("role", role);
              if (role === "student") navigate("/student");
              else if (role === "teacher") navigate("/teacher");
              else navigate("/parent");
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



