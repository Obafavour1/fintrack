import { LayoutGrid, Menu, Search } from "lucide-react";
import { Avatar } from "../ui/Avatar";
import Image from "next/image";

export const DashboardHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#FCFDFD] border-b border-gray-200 px-4 py-3 z-50 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <button type="button">
              <Menu />
            </button>
            <Image
              src="/fintrackLogo.png"
              alt="FinTrack Logo"
              width={112}
              height={32}
            />
          </div>
        </div>

        <div className="flex items-center space-x-7">
          <div className="hidden relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
          <Search className="text-[#1B2528] w-6" />
          <LayoutGrid className="text-[#1B2528] w-6" />

          <Avatar name="User" size="md" />
        </div>
      </div>
    </header>
  );
};
