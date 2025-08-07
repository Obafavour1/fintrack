"use client";
import { DashboardSummary } from "@/lib/types";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";

const SummaryCard = ({
  title,
  value,
  change,
  isPositive,
}: {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
}) => {
  const changeColor = isPositive ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-[#34616F]/10 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-[#1B2528]">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-4 h-4 text-[#1B2528]" />
        </button>
      </div>
      <div className="">
        <p className="text-4xl font-bold text-[#1B2528]">{value}</p>
        <span className={`text-sm font-medium mt-5 ${changeColor}`}>
          {change}
        </span>
      </div>
    </div>
  );
};

export const SummaryCards = ({ summary }: { summary: DashboardSummary }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <SummaryCard
        title="Total Balance"
        value={formatCurrency(summary.totalBalance)}
        change={formatPercentage(summary.balanceChange)}
        isPositive={summary.balanceChange >= 0}
      />
      <SummaryCard
        title="Total Credits"
        value={formatCurrency(summary.totalCredits)}
        change={formatPercentage(summary.creditsChange)}
        isPositive={summary.creditsChange >= 0}
      />
      <SummaryCard
        title="Total Debits"
        value={formatCurrency(summary.totalDebits)}
        change={formatPercentage(summary.debitsChange)}
        isPositive={summary.debitsChange >= 0}
      />
      <SummaryCard
        title="Transactions"
        value={summary.transactionCount.toString()}
        change={formatPercentage(summary.transactionChange)}
        isPositive={summary.transactionChange >= 0}
      />
    </div>
  );
};
