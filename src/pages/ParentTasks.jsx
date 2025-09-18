import { useMemo, useState } from "react";
import "./parentTasks.css";

const INITIAL_TASKS = [
  {
    id: 1,
    subject: "📐 Matemáticas",
    title: "Resolver ejercicios de álgebra - Capítulo 5",
    description:
      "Completar ejercicios 1-20 de la página 45. Entregar en hoja cuadriculada.",
    teacher: "Prof. Carlos Mendoza",
    dueDate: "30 Mayo 2025",
    status: "pending", // pending | completed | overdue
    priority: "high",  // high | medium | low
    estimatedTime: "2 horas",
  },
  {
    id: 2,
    subject: "📚 Literatura",
    title: 'Ensayo sobre "Cien años de soledad"',
    description:
      "Análisis literario de 3 páginas sobre temas principales y contexto.",
    teacher: "Prof. María López",
    dueDate: "2 Junio 2025",
    status: "pending",
    priority: "medium",
    estimatedTime: "4 horas",
  },
  {
    id: 3,
    subject: "🧪 Química",
    title: "Informe de laboratorio - Reacciones",
    description:
      "Redactar informe sobre el experimento de combustión. Incluir conclusiones.",
    teacher: "Prof. Ana Gómez",
    dueDate: "28 Mayo 2025",
    status: "completed",
    priority: "medium",
    submittedDate: "27 Mayo 2025",
  },
  {
    id: 4,
    subject: "📜 Sociales",
    title: "Mapa conceptual - Guerra de los Mil Días",
    description:
      "Crear mapa conceptual con causas y consecuencias. Entregar en cartulina.",
    teacher: "Prof. Laura Hernández",
    dueDate: "5 Junio 2025",
    status: "pending",
    priority: "low",
    estimatedTime: "1.5 horas",
  },
];

const labels = {
  pending: "Pendiente",
  completed: "Completada",
  overdue: "Vencida",
  high: "ALTA",
  medium: "MEDIA",
  low: "BAJA",
};

export default function ParentTasks() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filter, setFilter] = useState("todas"); // todas | pendientes | completadas | vencidas
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState(null);

  const counts = useMemo(() => ({
    todas: tasks.length,
    pendientes: tasks.filter(t => t.status === "pending").length,
    completadas: tasks.filter(t => t.status === "completed").length,
    vencidas: tasks.filter(t => t.status === "overdue").length,
  }), [tasks]);

  const filtered = useMemo(() => {
    let data = [...tasks];
    if (filter !== "todas") {
      const map = { pendientes: "pending", completadas: "completed", vencidas: "overdue" };
      data = data.filter(t => t.status === map[filter]);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        t =>
          t.title.toLowerCase().includes(q) ||
          t.subject.toLowerCase().includes(q) ||
          t.teacher.toLowerCase().includes(q)
      );
    }
    return data;
  }, [tasks, filter, query]);

  const completeTask = (id) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, status: "completed", submittedDate: new Date().toLocaleDateString("es-CO") } : t
      )
    );
  };

  return (
    <div className="pt-wrapper">
      <header className="pt-header">
        <div>
          <h1 className="pt-title">Tareas de mi Hijo</h1>
          <p className="pt-subtitle">Revisa, filtra y marca como completadas las tareas asignadas.</p>
        </div>

        <div className="pt-actions">
          <div className="pt-search">
            <span>🔎</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por materia, título o profe…"
              aria-label="Buscar tarea"
            />
          </div>
        </div>
      </header>

      {/* Tabs de filtro */}
      <nav className="pt-tabs" role="tablist" aria-label="Filtros de tareas">
        {[
          { key: "todas", label: "Todas", count: counts.todas, emoji: "📋" },
          { key: "pendientes", label: "Pendientes", count: counts.pendientes, emoji: "⏳" },
          { key: "completadas", label: "Completadas", count: counts.completadas, emoji: "✅" },
          { key: "vencidas", label: "Vencidas", count: counts.vencidas, emoji: "⛔" },
        ].map(t => (
          <button
            key={t.key}
            role="tab"
            aria-selected={filter === t.key}
            className={`pt-tab ${filter === t.key ? "is-active" : ""}`}
            onClick={() => setFilter(t.key)}
          >
            <span className="pt-tab-emoji">{t.emoji}</span>
            {t.label}
            <span className="pt-tab-badge">{t.count}</span>
          </button>
        ))}
      </nav>

      {/* Lista de tarjetas */}
      <section className="pt-list">
        {filtered.map((t) => (
          <article key={t.id} className={`pt-card pt-${t.status}`}>
            <div className="pt-card-header">
              <div className="pt-card-title">
                <h3>{t.title}</h3>
                <span className={`pt-chip pt-priority-${t.priority}`}>{labels[t.priority]} PRIORIDAD</span>
                <span className="pt-chip pt-chip-soft">{t.subject}</span>
              </div>

              <span className={`pt-badge pt-badge-${t.status}`}>{labels[t.status]}</span>
            </div>

            <p className="pt-desc">{t.description}</p>

            <div className="pt-meta">
              <div className="pt-meta-left">
                <span>👨‍🏫 <b>{t.teacher}</b></span>
              </div>
              <div className="pt-meta-right">
                {t.status === "completed" ? (
                  <span className="pt-ok">✅ Entregado: {t.submittedDate}</span>
                ) : t.status === "overdue" ? (
                  <span className="pt-alert">⛔ Venció: {t.dueDate}</span>
                ) : (
                  <span>📅 Vence: {t.dueDate}</span>
                )}
                {t.estimatedTime && <span className="pt-dot">•</span>}
                {t.estimatedTime && <span>⏱️ {t.estimatedTime}</span>}
              </div>
            </div>

            <div className="pt-actions-row">
              <button className="pt-btn pt-btn-light" onClick={() => setDetail(t)}>👁️ Ver detalles</button>
              {t.status === "pending" && (
                <button className="pt-btn pt-btn-green" onClick={() => completeTask(t.id)}>✅ Marcar completada</button>
              )}
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="pt-empty">
            <div className="pt-empty-emoji">🎉</div>
            <h4>Sin resultados</h4>
            <p>No hay tareas para este filtro o búsqueda.</p>
          </div>
        )}
      </section>

      {detail && (
        <DetailModal
          task={detail}
          onClose={() => setDetail(null)}
          onComplete={() => {
            completeTask(detail.id);
            setDetail(null);
          }}
        />
      )}
    </div>
  );
}

function DetailModal({ task, onClose, onComplete }) {
  return (
    <div className="pt-modal" role="dialog" aria-modal="true">
      <div className="pt-modal-card">
        <div className="pt-modal-header">
          <h3>{task.title}</h3>
          <button className="pt-modal-close" aria-label="Cerrar" onClick={onClose}>×</button>
        </div>

        <div className="pt-modal-body">
          <div className="pt-modal-grid">
            <Info label="Materia" value={task.subject} />
            <Info label="Profesor" value={task.teacher} />
            <Info label="Fecha límite" value={task.dueDate} />
            <Info label="Estado" value={labels[task.status]} />
            {task.estimatedTime && <Info label="Tiempo estimado" value={task.estimatedTime} />}
            <Info label="Prioridad" value={labels[task.priority]} />
          </div>

          <h4 className="pt-block-title">📝 Descripción</h4>
          <div className="pt-box-soft">{task.description}</div>

          <h4 className="pt-block-title">📚 Recursos sugeridos</h4>
          <ul className="pt-resources">
            <li>📖 Libro de texto – Páginas 45–50</li>
            <li>🎥 Video explicativo en aula virtual</li>
            <li>💬 Consulta con el profesor en horario de atención</li>
          </ul>
        </div>

        <div className="pt-modal-footer">
          <button className="pt-btn pt-btn-light" onClick={onClose}>Cerrar</button>
          {task.status === "pending" && (
            <button className="pt-btn pt-btn-green" onClick={onComplete}>✅ Marcar completada</button>
          )}
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="pt-info">
      <div className="pt-info-label">{label.toUpperCase()}</div>
      <div className="pt-info-value">{value}</div>
    </div>
  );
}





