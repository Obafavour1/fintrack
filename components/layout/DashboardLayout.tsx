"use client";
import React, { useState } from "react";
import { DashboardHeader } from "../dashboard/DashboardHeader";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <DashboardHeader onMenuClick={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div
        className={`transition-all duration-300 min-h-screen md:ml-64 pt-16
             ${sidebarOpen ? "md:ml-64" : "ml-0"}
        `}
      >
        {children}
      </div>
    </>
  );
};
