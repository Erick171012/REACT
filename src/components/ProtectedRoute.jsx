import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole }) {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [okRole, setOkRole] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const role = localStorage.getItem("role");
      setAuthed(!!user);
      setOkRole(!requiredRole || role === requiredRole);
      setChecking(false);
    });
    return () => unsub();
  }, [requiredRole]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Verificando…</div>
      </div>
    );
  }

  if (!authed) return <Navigate to="/" replace />;
  if (!okRole) {
    // rol incorrecto → cerrar sesión para evitar loops
    signOut(auth);
    return <Navigate to="/" replace />;
  }
  return children;
}
