import { useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const ROLES = [
  { value: "student", label: "🎓 Estudiante" },
  { value: "teacher", label: "👨‍🏫 Profesor" },
  { value: "parent", label: "👨‍👩‍👧‍👦 Padre de familia" },
  { value: "admin", label: "👔 Administrativo" },
];

const SUBJECTS = [
  "Matemáticas",
  "Español",
  "Ciencias Naturales",
  "Ciencias Sociales",
  "Inglés",
  "Educación Física",
  "Tecnología",
  "Artes",
  "Ética y Valores",
  "Religión",
  "Filosofía",
  "Química",
  "Física",
  "Biología",
];

export default function AuthForm({ mode, onLogin, onSuccess }) {
  const isRegister = mode === "register";
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [mainSubject, setMainSubject] = useState("");
  const [institutionalEmail, setInstitutionalEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    try {
      if (isRegister) {
        // --- Registro ---
        const cred = await createUserWithEmailAndPassword(auth, email, pass);
        await updateProfile(cred.user, { displayName: name });

        const userData = {
          uid: cred.user.uid,
          email,
          name,
          role,
          createdAt: new Date().toISOString(),
        };

        if (phone) userData.phone = phone;
        if (role === "teacher" && employeeCode)
          userData.employeeCode = employeeCode;
        if (role === "teacher" && mainSubject)
          userData.mainSubject = mainSubject;
        if (institutionalEmail)
          userData.institutionalEmail = institutionalEmail;

        await setDoc(doc(db, "users", cred.user.uid), userData);

        setMsg({
          type: "success",
          text: "✅ Registro exitoso. Ahora inicia sesión.",
        });
      } else {
        // --- Inicio de sesión ---
        const { user } = await signInWithEmailAndPassword(auth, email, pass);
        const docRef = doc(db, "users", user.uid);
        const snap = await getDoc(docRef);

        if (!snap.exists()) {
          setMsg({
            type: "error",
            text: "No se encontró tu perfil en la base de datos. Contacta al administrador.",
          });
          return;
        }

        const data = snap.data();

        // Guarda info local para layouts
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);

        // Si App.jsx envió una función onLogin (nuevo flujo)
        if (onLogin) {
          await onLogin(email, pass);
        } else if (onSuccess) {
          onSuccess(data.role);
        } else {
          // fallback por si algo falla
          if (data.role === "parent") window.location.href = "/parent";
          else if (data.role === "teacher") window.location.href = "/teacher";
          else if (data.role === "student") window.location.href = "/student";
          else if (data.role === "admin") window.location.href = "/admin";
        }
      }
    } catch (err) {
      setMsg({ type: "error", text: traducirError(err) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Correo Electrónico */}
      <div>
        <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
          📧 Correo Electrónico
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder="ejemplo@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {isRegister && (
        <>
          {/* Teléfono */}
          <div>
            <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
              📱 Teléfono / WhatsApp
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="+57 300 123 4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </>
      )}

      {/* Contraseña */}
      <div>
        <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
          🔐 Contraseña
        </label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-12"
            placeholder="Tu contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            minLength={6}
            required
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
          >
            {show ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
      </div>

      {isRegister && (
        <>
          {/* Tipo de Usuario */}
          <div>
            <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
              👥 Tipo de Usuario
            </label>
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Selecciona tu rol</option>
              {ROLES.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Código de Empleado (solo profesores) */}
          {role === "teacher" && (
            <div>
              <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
                🆔 Código de Empleado
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="EMP-2024-001"
                value={employeeCode}
                onChange={(e) => setEmployeeCode(e.target.value)}
              />
            </div>
          )}

          {/* Materia Principal */}
          {role === "teacher" && (
            <div>
              <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
                📚 Materia Principal
              </label>
              <select
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={mainSubject}
                onChange={(e) => setMainSubject(e.target.value)}
              >
                <option value="">Selecciona</option>
                {SUBJECTS.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Email Institucional */}
          <div>
            <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
              📧 Email Institucional
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="nombre@colegio.edu.co"
              value={institutionalEmail}
              onChange={(e) => setInstitutionalEmail(e.target.value)}
            />
          </div>

          {/* Nombre */}
          <div>
            <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
              👤 Nombre Completo
            </label>
            <input
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Tu nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </>
      )}

      {/* Botón */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
      >
        <span>📝</span>
        <span>{loading ? "Procesando..." : isRegister ? "Registrarse" : "Iniciar Sesión"}</span>
      </button>

      {/* Mensaje */}
      {msg && (
        <div
          className={`rounded-xl px-4 py-3 text-sm ${
            msg.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          <div className="flex items-center">
            <span className="mr-2">
              {msg.type === "success" ? "✅" : "❌"}
            </span>
            {msg.text}
          </div>
        </div>
      )}
    </form>
  );
}

function traducirError(err) {
  const c = err?.code || "";
  if (c.includes("auth/invalid-email")) return "Correo inválido.";
  if (c.includes("auth/email-already-in-use")) return "Ese correo ya está registrado.";
  if (c.includes("auth/weak-password")) return "La contraseña debe tener al menos 6 caracteres.";
  if (c.includes("auth/user-not-found") || c.includes("auth/wrong-password"))
    return "Correo o contraseña incorrectos.";
  return "Ocurrió un error. Intenta de nuevo.";
}
