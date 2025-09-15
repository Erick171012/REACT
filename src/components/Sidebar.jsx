import { useLocation, Link } from "react-router-dom";

const items = [
  { name: "Inicio", to: "/parent", icon: "🏠", color: "text-orange-600" },
  { name: "Tareas de mi Hijo", to: "/parent/tasks", icon: "📝", color: "text-purple-600" },
  { name: "Horario", to: "/parent/schedule", icon: "📅", color: "text-blue-600" },
  { name: "Excusas Médicas", to: "/parent/excuses", icon: "🏥", color: "text-purple-600" },
  { name: "Citaciones", to: "/parent/appointments", icon: "📢", color: "text-pink-600" },
  { name: "Eventos", to: "/parent/events", icon: "🎉", color: "text-orange-600" },
  { name: "Comunicación", to: "/parent/comms", icon: "💬", color: "text-gray-600" },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const isActive = (to) => pathname === to || pathname.startsWith(`${to}/`);

  return (
    <nav className="w-64 bg-white rounded-2xl shadow-lg p-4">
      <div className="space-y-2">
        {items.map((item) => {
          const active = isActive(item.to);
          return (
            <Link
              key={item.name}
              to={item.to}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                active 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className={`text-lg ${active ? "text-white" : item.color}`}>
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

