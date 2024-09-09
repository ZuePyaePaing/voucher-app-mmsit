import { NavLink } from "react-router-dom";
import LightDarkMode from "./light-dark-mode";
import {
  ClipboardList,
  Users,
  Building2,
  MessageCircleMore,
  Settings,
  HandCoins,
  ReceiptText,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", icon: <ClipboardList />, label: "All Tasks" },
  { to: "/team", icon: <Users />, label: "Team" },
  { to: "/company", icon: <Building2 />, label: "Company" },
  { to: "/messages", icon: <MessageCircleMore />, label: "Messages" },
  { to: "/phone", icon: <Phone />, label: "Phone" },
];

const navLinks2 = [
  { to: "/payments", icon: <HandCoins />, label: "Payments" },
  { to: "/invoices", icon: <ReceiptText />, label: "Invoices" },
  { to: "/settings", icon: <Settings />, label: "Settings" },
];
const Sidebar = () => {
  return (
    <aside className=" w-1/6 font-popin h-screen flex items-center  justify-between flex-col p-4">
      <div className=" flex items-center justify-evenly flex-col gap-y-6">
        <h2 className=" text-lg cursor-pointer font-bold">
          Fireart <span className="text-red-500">Studio</span>
        </h2>
        <div className=" flex flex-col gap-y-2">
          {navLinks.map((link) => (
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "p-2 hover:bg-slate-300 flex gap-x-2 rounded-md",
                  isActive && "bg-slate-300 text-white"
                )
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
        <div className=" flex flex-col gap-y-2">
          {navLinks2.map((link) => (
            <NavLink
              to={link.to}
              className="p-2 hover:bg-slate-300 flex gap-x-2 rounded-md"
            >
              {link.icon} <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <LightDarkMode />
    </aside>
  );
};

export default Sidebar;
