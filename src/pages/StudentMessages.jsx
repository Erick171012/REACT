import React from "react";
import { MessageSquare } from "lucide-react";
import "./StudentMessages.css"; // si le estás haciendo su CSS aparte

// Componente de tarjeta simple (temporal)
const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
    {children}
  </div>
);

export default function StudentMessages() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-blue-600" />
        Mensajes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h2 className="font-medium text-lg">Mensaje del Profesor de Matemáticas</h2>
          <p className="text-sm text-gray-600 mt-1">
            Recuerda que mañana hay evaluación del segundo periodo. Repasa los temas de álgebra.
          </p>
          <p className="text-xs text-gray-400 mt-2 text-right">Hace 2 horas</p>
        </Card>

        <Card>
          <h2 className="font-medium text-lg">Mensaje del Coordinador</h2>
          <p className="text-sm text-gray-600 mt-1">
            El día viernes habrá jornada cultural. Asistencia obligatoria.
          </p>
          <p className="text-xs text-gray-400 mt-2 text-right">Hace 1 día</p>
        </Card>
      </div>
    </div>
  );
}
