import React from "react";
import { Home, BarChart2, CreditCard, Users, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <Home className="w-5 h-5" />, href: "#" },
  {
    label: "Transactions",
    icon: <CreditCard className="w-5 h-5" />,
    href: "#",
  },
  { label: "Reports", icon: <BarChart2 className="w-5 h-5" />, href: "#" },

  // { label: "Re", icon: <Users className="w-5 h-5" />, href: "#" },
  { label: "Settings", icon: <Settings className="w-5 h-5" />, href: "#" },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 h-full w-64 bg-[#FCFDFD] border-r border-gray-200 flex flex-col py-8 px-4 z-40 shadow-lg">
      {/* <div className="mb-10 flex items-center space-x-3 px-2">
        <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">F</span>
        </div>
        <span className="font-bold text-xl text-gray-900">FinTrack</span>
      </div> */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base text-[#1B2528] hover:bg-[#386776]/10 hover:text-[#3A6C7B] transition-colors font-medium"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto text-xs text-gray-400 px-2">© 2024 FinTrack</div>
    </aside>
  );
};

export default Sidebar;
