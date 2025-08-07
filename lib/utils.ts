"use client";
import { useCallback, useMemo, useState } from "react";
import { SortField, SortOrder, Transaction } from "./types";

// Utility Functions
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(Math.abs(amount));
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US");
};

export const formatPercentage = (value: number): string => {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value}%`;
};

// Custom Hooks
export const useTransactionSort = (transactions: Transaction[]) => {
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const sortedTransactions = useMemo(() => {
    return [...transactions].sort((a, b) => {
      let aValue: string | number = a[sortField];
      let bValue: string | number = b[sortField];

      if (sortField === "date") {
        aValue = new Date(a.date).getTime();
        bValue = new Date(b.date).getTime();
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }, [transactions, sortField, sortOrder]);

  const handleSort = useCallback(
    (field: SortField) => {
      if (field === sortField) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        setSortField(field);
        setSortOrder("asc");
      }
    },
    [sortField, sortOrder]
  );

  return { sortedTransactions, sortField, sortOrder, handleSort };
};
