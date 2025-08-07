import React from "react";
import { Home, BarChart2, CreditCard, Users, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    label: "Dashboard",
    icon: <Home className="w-5 h-5" />,
    href: "/dashboard",
  },
  {
    label: "Transactions",
    icon: <CreditCard className="w-5 h-5" />,
    href: "/transactions",
  },
  {
    label: "Reports",
    icon: <BarChart2 className="w-5 h-5" />,
    href: "/reports",
  },
  {
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
    href: "/settings",
  },
];

interface SidebarProps {
  isOpen?: boolean;
  closeSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, closeSidebar }) => {
  // Helper to close sidebar only on mobile
  const handleNavClick = () => {
    if (closeSidebar && window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`fixed top-16 left-0 h-full bg-[#FCFDFD] border-r border-gray-200 flex flex-col py-8 px-4 z-40 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64`}
      >
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base text-[#1B2528] hover:bg-[#386776]/10 hover:text-[#3A6C7B] transition-colors font-medium"
                  onClick={handleNavClick}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto text-xs text-gray-400 px-2">
          © 2024 FinTrack
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
