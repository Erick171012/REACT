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
    <header style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo + Título */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#2563eb',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
          }}>
            <span style={{
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>CC</span>
          </div>
          <div>
            <h1 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#111827',
              margin: 0
            }}>Colegio Cooperativo</h1>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: 0
            }}>Agenda Estudiantil Digital</p>
          </div>
        </div>

        {/* Panel derecho */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Notificaciones */}
          <div style={{ position: 'relative' }}>
            <button style={{
              position: 'relative',
              padding: '8px',
              color: '#6b7280',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                width: '20px',
                height: '20px',
                backgroundColor: '#ef4444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>3</span>
              </div>
            </button>
          </div>

          {/* Separador */}
          <div style={{
            width: '1px',
            height: '32px',
            backgroundColor: '#d1d5db'
          }}></div>

          {/* Usuario */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{
                color: 'white',
                fontWeight: '600',
                fontSize: '14px'
              }}>
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#111827'
              }}>{user.name}</div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280'
              }}>{user.role}</div>
            </div>
          </div>

          {/* Separador */}
          <div style={{
            width: '1px',
            height: '32px',
            backgroundColor: '#d1d5db'
          }}></div>

          {/* Botón Cerrar Sesión */}
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}
