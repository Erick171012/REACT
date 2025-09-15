import { useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const ROLES = [
  { value: "parent", label: "Padre de familia" },
  { value: "teacher", label: "Profesor" },
  { value: "student", label: "Estudiante" },
];

export default function AuthForm({ mode }) {
  const isRegister = mode === "register";
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("parent");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      if (isRegister) {
        const cred = await createUserWithEmailAndPassword(auth, email, pass);
        await updateProfile(cred.user, { displayName: name });
        await setDoc(doc(db, "users", cred.user.uid), {
          uid: cred.user.uid,
          email,
          name,
          role,
          createdAt: new Date().toISOString(),
        });
        setMsg({ type: "success", text: "Registro exitoso. Ahora inicia sesión." });
      } else {
 
  const { user } = await signInWithEmailAndPassword(auth, email, pass);
  const snap = await getDoc(doc(db, "users", user.uid));
  const data = snap.exists() ? snap.data() : { role: "desconocido" };

  // Guarda rol en localStorage para ProtectedRoute
  localStorage.setItem("role", data.role);

  // Redirige según rol
  const path =
    data.role === "parent"
      ? "/parent"
      : data.role === "teacher"
      ? "/teacher"
      : "/student";

  window.location.href = path;
}

    } catch (err) {
      setMsg({ type: "error", text: traducirError(err) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isRegister && (
        <div>
          <label className="block mb-1 text-sm text-[#374151]">Nombre</label>
          <input
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#93C5FD]"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}

      <div>
        <label className="block mb-1 text-sm text-[#374151]">Correo electrónico</label>
        <input
          type="email"
          className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#93C5FD]"
          placeholder="ejemplo@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-[#374151]">Contraseña</label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 pr-12 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#93C5FD]"
            placeholder="Tu contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            minLength={6}
            required
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#2563EB] hover:underline"
          >
            {show ? "Ocultar" : "Mostrar"}
          </button>
        </div>
      </div>

      {isRegister && (
        <div>
          <label className="block mb-1 text-sm text-[#374151]">Tipo de usuario</label>
          <select
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#93C5FD]"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {ROLES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        disabled={loading}
        className="w-full rounded-xl py-3 font-semibold text-white bg-[#1E40AF] hover:bg-[#1E3A8A] active:bg-[#0B3B91] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Procesando..." : isRegister ? "Crear cuenta" : "Entrar"}
      </button>

      {msg && (
        <div
          className={`rounded-xl px-4 py-3 text-sm border ${
            msg.type === "success"
              ? "bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]"
              : "bg-[#FEF2F2] text-[#991B1B] border-[#FECACA]"
          }`}
        >
          {msg.text}
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
