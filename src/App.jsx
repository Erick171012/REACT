import { useState } from "react";
import AuthForm from "./components/AuthForm";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import coopeLogo from "./assets/coope.png"; // 🟦 Escudo del colegio
import "./App.css"; // ✅ Estilos principales (asegúrate que este archivo existe)

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
    <div className="login-page">
      <div className="login-card">
        {/* 🏫 Logo y encabezado */}
        <div className="login-header">
          <img
            src={coopeLogo}
            alt="Escudo Colegio Cooperativo"
            className="login-logo"
          />
          <h1>Colegio Cooperativo</h1>
          <p>Sistema de Gestión Estudiantil</p>
        </div>

        {/* 🔹 Botones (Login / Registro) */}
        <div className="login-tabs">
          <button
            onClick={() => setMode("login")}
            className={mode === "login" ? "active" : ""}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setMode("register")}
            className={mode === "register" ? "active" : ""}
          >
            Registrarse
          </button>
        </div>

        {/* 🔸 Formulario */}
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

        {/* 🔻 Footer */}
        <footer>
          © {new Date().getFullYear()} Colegio Cooperativo Garzón — Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}





