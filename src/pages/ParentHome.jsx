import React, { useMemo } from "react";
import "./parentHome.css";

export default function ParentHome() {
  // Datos demo (puedes engancharlos a tu backend cuando quieras)
  const now = useMemo(() => {
    const d = new Date();
    const fecha = d.toLocaleDateString("es-CO", { weekday:"long", day:"numeric", month:"long" });
    const hora  = d.toLocaleTimeString("es-CO", { hour:"numeric", minute:"2-digit" });
    return { fecha, hora };
  }, []);

  const KPIS = [
    { label:"Tareas Asignadas", value: 8, sub:"+2 esta semana", chip:"info" },
    { label:"Completadas", value: "5", sub:"62.5% de progreso", chip:"ok" },
    { label:"Pendientes", value: 3, sub:"1 vence pronto", chip:"warn" },
    { label:"Asistencia", value: "92%", sub:"Excelente", chip:"ok" },
  ];

  const ACTIVIDADES = [
    { icon:"📝", color:"#3b82f6", title:"Nueva tarea de Matemáticas", sub:"Cap. 5 Álgebra: pág. 45 (vence mañana)", meta:["Prof. Carlos","7°A"] },
    { icon:"📊", color:"#22c55e", title:"Calificación actualizada", sub:"Química - Examen parcial: 4.6/5", meta:["Prof. Andrea","Hoy 10:15 AM"] },
    { icon:"📢", color:"#f97316", title:"Citación de seguimiento", sub:"Viernes 3:00 PM - Coordinación", meta:["Padre/Madre","Pendiente confirmar"] },
  ];

  const recordar = [
    { t:"Revisar tareas pendientes", when:"Hoy 7:00 PM" },
    { t:"Confirmar citación", when:"Mañana 9:00 AM" }
  ];

  return (
    <div className="ph-wrap">
      {/* CABECERA */}
      <div className="ph-head">
        <div>
          <h1 className="ph-title">Panel Principal</h1>
          <div className="ph-sub" style={{color:"#6b7280"}}>
            Seguimiento académico de <strong>Carlos González</strong>
          </div>
        </div>
        <div className="ph-upd">
          <div>Última actualización</div>
          <div><strong>Hoy</strong>, {now.hora}</div>
        </div>
      </div>

      {/* KPIs */}
      <div className="ph-grid">
        {KPIS.map((k,i)=>(
          <div key={i} className="ph-card">
            <div className="ph-kpi-top">
              <span>{k.label}</span>
              <span className={`ph-chip ${k.chip}`}>{k.chip === "ok" ? "✓" : k.chip === "warn" ? "!" : "i"}</span>
            </div>
            <div className="ph-kpi-value">{k.value}</div>
            <div className="ph-kpi-sub">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* DOS COLUMNAS */}
      <div className="ph-two">
        {/* ACTIVIDADES RECIENTES */}
        <div className="ph-block">
          <div className="ph-block-h">
            <h3>Actividades Recientes</h3>
            <button className="ph-btn light" onClick={()=>alert("Ver todas")}>Ver todas</button>
          </div>
          <div className="ph-block-b">
            {ACTIVIDADES.map((a,idx)=>(
              <div key={idx} className="ph-act">
                <div className="ph-ico" style={{background:a.color}}>{a.icon}</div>
                <div>
                  <div className="ph-act-title">{a.title}</div>
                  <div className="ph-act-sub">{a.sub}</div>
                  <div className="ph-act-meta">
                    {a.meta.map((m,i)=><span key={i}>{m}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACCIONES RÁPIDAS / RECORDATORIOS */}
        <div className="ph-block">
          <div className="ph-block-h">
            <h3>Acciones Rápidas</h3>
          </div>
          <div className="ph-block-b">
            <div className="ph-quick">
              <button className="ph-btn blue" onClick={()=>window.location.href="/parent/tasks"}>📝 Ver Tareas</button>
              <button className="ph-btn green" onClick={()=>window.location.href="/parent/appointments"}>📅 Citaciones</button>
              <button className="ph-btn light" onClick={()=>window.location.href="/parent/schedule"}>⏰ Horario</button>
            </div>

            <div style={{marginTop:14, marginBottom:6, color:"#6b7280", fontWeight:700}}>Recordatorios</div>
            {recordar.map((r,i)=>(
              <div key={i} className="ph-rem">
                <div>🔔 {r.t}</div>
                <small>{r.when}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

