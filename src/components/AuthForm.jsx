import { useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
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
  const [showResetModal, setShowResetModal] = useState(false);

  // 🔹 Recuperar contraseña
  const handleForgotPassword = async () => {
    if (!email) {
      setMsg({
        type: "error",
        text: "Por favor ingresa tu correo electrónico para recuperar la contraseña.",
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setShowResetModal(true); // Mostrar ventana de confirmación
    } catch (error) {
      setMsg({ type: "error", text: traducirError(error) });
    }
  };

  // 🔸 Registro o inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    try {
      if (isRegister) {
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
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);

        if (onLogin) await onLogin(email, pass);
        else if (onSuccess) onSuccess(data.role);
      }
    } catch (err) {
      setMsg({ type: "error", text: traducirError(err) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Correo Electrónico */}
        <div>
          <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
            📧 Correo Electrónico
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
            placeholder="ejemplo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Contraseña */}
        <div>
          <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
            🔐 Contraseña
          </label>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all pr-12"
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

          {!isRegister && (
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-700 hover:underline mt-1"
            >
              ¿Olvidaste tu contraseña?
            </button>
          )}
        </div>

        {/* Campos adicionales (solo registro) */}
        {isRegister && (
          <>
            <div>
              <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
                👤 Nombre Completo
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
                placeholder="Tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
                👥 Tipo de Usuario
              </label>
              <select
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
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

            {role === "teacher" && (
              <>
                <div>
                  <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
                    🆔 Código de Empleado
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="EMP-2024-001"
                    value={employeeCode}
                    onChange={(e) => setEmployeeCode(e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex items-center mb-2 text-sm font-medium text-gray-600">
                    📚 Materia Principal
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
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
              </>
            )}
          </>
        )}

        {/* Botón principal */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-[#0b1d4a] hover:bg-[#102d6a] text-white"
          }`}
        >
          {loading ? "Procesando..." : isRegister ? "Registrarse" : "Iniciar sesión"}
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
              <span className="mr-2">{msg.type === "success" ? "✅" : "❌"}</span>
              {msg.text}
            </div>
          </div>
        )}
      </form>

      {/* 🟢 Modal de confirmación de restablecimiento */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 shadow-2xl text-center max-w-sm w-full">
            <div className="text-5xl mb-3">📩</div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Correo enviado
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Hemos enviado un enlace de recuperación a <br />
              <span className="font-semibold text-blue-700">{email}</span>.
            </p>
            <button
              onClick={() => setShowResetModal(false)}
              className="bg-[#0b1d4a] hover:bg-[#102d6a] text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all duration-200"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// 🧠 Traducción de errores Firebase
function traducirError(err) {
  const c = err?.code || "";
  if (c.includes("auth/invalid-email")) return "Correo inválido.";
  if (c.includes("auth/user-not-found")) return "No hay una cuenta registrada con ese correo.";
  if (c.includes("auth/missing-email")) return "Debes ingresar tu correo para continuar.";
  if (c.includes("auth/weak-password")) return "La contraseña debe tener al menos 6 caracteres.";
  if (c.includes("auth/wrong-password")) return "Contraseña incorrecta.";
  return "Ocurrió un error. Intenta de nuevo.";
}

