import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  CalendarDaysIcon,
  EnvelopeOpenIcon,
  BellAlertIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";

const items = [
  { name: "Inicio", to: "/parent", icon: HomeIcon },
  { name: "Tareas de mi Hijo", to: "/parent/tasks", icon: ClipboardDocumentCheckIcon },
  { name: "Horario", to: "/parent/schedule", icon: CalendarDaysIcon },
  { name: "Excusas Médicas", to: "/parent/excuses", icon: EnvelopeOpenIcon },
  { name: "Citaciones", to: "/parent/meetings", icon: BellAlertIcon },
  { name: "Comunicación", to: "/parent/comms", icon: ChatBubbleOvalLeftEllipsisIcon },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const isActive = (to) => pathname === to || pathname.startsWith(`${to}/`);

  return (
    <nav className="bg-white/95 backdrop-blur rounded-2xl shadow-xl shadow-black/5 ring-1 ring-black/5 p-3">
      {items.map((it) => {
        const active = isActive(it.to);
        const Icon = it.icon;
        return (
          <Link
            key={it.name}
            to={it.to}
            className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium mb-1
              ${active ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"}`}
          >
            <Icon className={`h-5 w-5 ${active ? "text-indigo-600" : "text-gray-400"}`} />
            <span>{it.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

