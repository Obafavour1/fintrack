import { mockTransactions, mockUsers, summaryData } from "@/lib/data";
import { TabNavigation, TransactionTable } from "../Table/DashboardTable";
import { UserAvatars } from "./UserAvatars";
import { Header } from "../layout/Header";
import { SummaryCards } from "./SummarCard";
import { ChevronDown, Ellipsis } from "lucide-react";

export const WalletLedgerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex max-md:flex-col md:items-center justify-between ">
            <div className="flex items-center space-x-4">
              <h1 className="text-4xl flex items-center gap-4 font-bold text-[#1B2528]">
                Wallet Ledger <ChevronDown />
              </h1>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-950 rounded-full" />
                <span className="text-sm text-[#1B2528] rounded-full px-3 bg-[#386776]/10">
                  Active
                </span>
              </div>
            </div>
            <div className="flex gap-5 max-md:mt-5 items-center">
              <button className="bg-[#4B8B9F] text-[#020303] px-4 py-2 rounded-full hover:bg-[#4B8B9F]/60 transition-colors">
                Share
              </button>
              <div className="border border-gray-400 rounded-full">
                <Ellipsis />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-7 justify-between">
            <div className="flex items-center space-x-4">
              <UserAvatars users={mockUsers} />
              <span className="text-sm text-[#4B8B9F]/60">
                Ava, Liam, Noah +12 others
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <TabNavigation />

        {/* Summary Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1B2528] mb-4">Summary</h2>
          <SummaryCards summary={summaryData} />
        </div>

        {/* Transactions Table */}
        <div>
          <TransactionTable transactions={mockTransactions} />
        </div>
      </main>
    </div>
  );
};
