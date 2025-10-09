import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./StudentSchedule.css";

export default function StudentSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        if (!uid) return;
        const q = query(collection(db, "schedules"), where("studentUid", "==", uid));
        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setSchedule(data);
      } catch (error) {
        console.error("Error al obtener el horario:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [uid]);

  // Agrupar por día
  const groupedByDay = schedule.reduce((acc, cls) => {
    if (!acc[cls.day]) acc[cls.day] = [];
    acc[cls.day].push(cls);
    return acc;
  }, {});

  return (
    <div className="student-schedule">
      <h2 className="title">🕓 Mi Horario</h2>
      <p className="subtitle">Aquí se muestra el horario semanal del estudiante.</p>

      {loading ? (
        <p className="loading">Cargando horario...</p>
      ) : schedule.length === 0 ? (
        <div className="empty-box">
          <p>📭 No tienes clases registradas.</p>
        </div>
      ) : (
        Object.keys(groupedByDay).map((day) => (
          <div key={day} className="day-section">
            <h3 className="day-title">{day}</h3>
            <div className="schedule-grid">
              {groupedByDay[day].map((cls) => (
                <div key={cls.id} className="class-card">
                  <div className="class-header">
                    <h4>{cls.subject}</h4>
                    <span className="time-tag">{cls.time}</span>
                  </div>
                  <p className="teacher">👨‍🏫 {cls.teacher}</p>
                  <p className="room">🏫 {cls.room}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}


