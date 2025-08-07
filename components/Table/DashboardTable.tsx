"use client";
import { SortField, SortOrder, Transaction } from "@/lib/types";
import { formatCurrency, formatDate, useTransactionSort } from "@/lib/utils";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { useState } from "react";

const TableHeader = ({
  onSort,
  sortField,
  sortOrder,
}: {
  onSort: (field: SortField) => void;
  sortField: SortField;
  sortOrder: SortOrder;
}) => {
  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4" />;
    return sortOrder === "asc" ? (
      <ArrowUp className="w-4 h-4" />
    ) : (
      <ArrowDown className="w-4 h-4" />
    );
  };

  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left">
          <button
            onClick={() => onSort("date")}
            className="flex items-center space-x-1 text-xs font-medium text-gray-500  tracking-wider hover:text-gray-700"
          >
            <span>Date</span>
            <SortIcon field="date" />
          </button>
        </th>
        <th className="px-6 py-3 text-left">
          <button
            onClick={() => onSort("remark")}
            className="flex items-center space-x-1 text-xs font-medium text-gray-500  tracking-wider hover:text-gray-700"
          >
            <span>Remark</span>
            <SortIcon field="remark" />
          </button>
        </th>
        <th className="px-6 py-3 text-left">
          <button
            onClick={() => onSort("amount")}
            className="flex items-center space-x-1 text-xs font-medium text-gray-500  tracking-wider hover:text-gray-700"
          >
            <span>Amount</span>
            <SortIcon field="amount" />
          </button>
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
          Currency
        </th>
        <th className="px-6 py-3 text-left">
          <button
            onClick={() => onSort("type")}
            className="flex items-center space-x-1 text-xs font-medium text-gray-500  tracking-wider hover:text-gray-700"
          >
            <span>Type</span>
            <SortIcon field="type" />
          </button>
        </th>
      </tr>
    </thead>
  );
};

export const TransactionRow = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  const isCredit = transaction.type === "Credit";
  const amountColor = isCredit ? "text-green-600" : "text-red-600";

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1B2528]">
        {formatDate(transaction.date)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1B2528]">
        {transaction.remark}
      </td>
      <td
        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${amountColor}`}
      >
        {formatCurrency(transaction.amount)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1B2528]">
        {transaction.currency}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex w-fit rounded-full items-center px-3 py-1 bg-[#1B2528]/10">
          <div
            className={`w-1 h-1 rounded-full mr-2 ${
              isCredit ? "bg-green-900" : "bg-red-900"
            }`}
          />
          <span className="text-sm font-medium text-[#1B2528]">
            {transaction.type}
          </span>
        </div>
      </td>
    </tr>
  );
};

export const TransactionTable = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  const { sortedTransactions, sortField, sortOrder, handleSort } =
    useTransactionSort(transactions);

  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <p className="text-gray-500">No transactions found.</p>
      </div>
    );
  }

  return (
    <div className=" rounded-lg  overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader
            onSort={handleSort}
            sortField={sortField}
            sortOrder={sortOrder}
          />
          <tbody className=" divide-y divide-gray-200">
            {sortedTransactions.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Transactions"];

  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === tab
                ? "border-[#437D8E] text-[#437D8E]"
                : "border-transparent text-[#15272D]/60 hover:text-[#437D8E] "
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};
