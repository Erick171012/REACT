import { useMemo, useState } from "react";
import "./ParentComms.css";

const RAW_MESSAGES = [
  {
    id: 1,
    from: "Prof. Carlos Mendoza",
    role: "Profesor",
    icon: "👨‍🏫",
    title: "Felicitación por desempeño",
    body:
      "Excelente trabajo en el último examen de álgebra. Carlos mostró gran dedicación y mejoró su promedio.",
    when: "Hace 2 horas",
    channel: "Aula de Matemáticas",
    important: true,
    unread: true,
  },
  {
    id: 2,
    from: "Coordinación Académica",
    role: "Coordinación",
    icon: "🏫",
    title: "Recordatorio: Reunión de Padres",
    body:
      "La reunión de padres será el próximo viernes a las 6:00 PM en el Auditorio Principal.",
    when: "Ayer",
    channel: "Coordinación",
    important: true,
    unread: false,
  },
  {
    id: 3,
    from: "Prof. Ana Gómez",
    role: "Profesor",
    icon: "🧪",
    title: "Material de apoyo Química",
    body:
      "Se subió a la plataforma el PDF con ejercicios de combustión y una guía corta de laboratorio.",
    when: "Hace 3 días",
    channel: "Aula de Química",
    important: false,
    unread: true,
  },
  {
    id: 4,
    from: "Vida Escolar",
    role: "Coordinación",
    icon: "📣",
    title: "Festival de Talentos",
    body:
      "Inscripciones abiertas hasta el 12 de junio. Ensayos el miércoles y viernes a las 2:30 PM.",
    when: "Hace 5 días",
    channel: "Eventos",
    important: false,
    unread: false,
  },
];

const FILTERS = [
  { key: "all", label: "Todos" },
  { key: "imp", label: "Importantes" },
  { key: "prof", label: "Profesores" },
  { key: "coord", label: "Coordinación" },
];

export default function ParentComms() {
  const [messages, setMessages] = useState(RAW_MESSAGES);
  const [tab, setTab] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    let list = [...messages];
    if (tab === "imp") list = list.filter((m) => m.important);
    if (tab === "prof") list = list.filter((m) => m.role === "Profesor");
    if (tab === "coord") list = list.filter((m) => m.role !== "Profesor");
    if (q.trim()) {
      const term = q.toLowerCase();
      list = list.filter(
        (m) =>
          m.title.toLowerCase().includes(term) ||
          m.body.toLowerCase().includes(term) ||
          m.from.toLowerCase().includes(term)
      );
    }
    return list;
  }, [messages, tab, q]);

  const unreadCount = messages.filter((m) => m.unread).length;

  const markRead = (id) =>
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, unread: false } : m))
    );

  const toggleImportant = (id) =>
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, important: !m.important } : m))
    );

  return (
    <div className="comms">
      {/* Header */}
      <div className="comms-head">
        <div className="comms-title">
          <span className="emoji">💬</span>
          <h1>Comunicación</h1>
        </div>
        <div className="comms-right">
          <div className="chip bell">
            🔔 <span className="dot">{unreadCount}</span> nuevos
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="comms-toolbar">
        <div className="tabs">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`tab ${tab === f.key ? "active" : ""}`}
              onClick={() => setTab(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="search">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por título, docente…"
          />
        </div>
      </div>

      {/* List */}
      <div className="comms-list">
        {filtered.map((m) => (
          <article key={m.id} className={`msg ${m.unread ? "unread" : ""}`}>
            <div className="msg-left">
              <div className="avatar">{m.icon}</div>
            </div>

            <div className="msg-body">
              <header className="msg-header">
                <div className="msg-title">
                  <h3>{m.title}</h3>
                  {m.important && <span className="tag tag-imp">IMPORTANTE</span>}
                  {m.unread && <span className="tag tag-new">NUEVO</span>}
                </div>
                <div className="msg-meta">{m.when}</div>
              </header>

              <div className="msg-from">
                <strong>{m.from}</strong> • <span>{m.channel}</span>
              </div>

              <p className="msg-text">{m.body}</p>

              <footer className="msg-actions">
                <button className="btn btn-flat" onClick={() => markRead(m.id)}>
                  ✅ Marcar leído
                </button>
                <button className="btn btn-flat" onClick={() => toggleImportant(m.id)}>
                  {m.important ? "★ Quitar importante" : "☆ Marcar importante"}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => alert("Responder (demo)")}
                >
                  Responder
                </button>
              </footer>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="empty">
            <div className="big">🔍</div>
            <p>No se encontraron mensajes con ese filtro/búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
