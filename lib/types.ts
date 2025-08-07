// lib/types.ts
export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

export interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export type SortField = "date" | "remark" | "amount" | "type";
export type SortOrder = "asc" | "desc";
