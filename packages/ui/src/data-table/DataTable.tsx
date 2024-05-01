"use client";
import {
  type ColumnDef,
  type ColumnSizingState,
  type RowSelectionState,
  type SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ReactNode } from "react";
import { Table, TableContainer } from "../table";
import { classNames } from "../utils";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHeader";
import { useSync } from "./useSync";
import { DataNotFound } from "./utils";

export type ColumnType<T> = ColumnDef<T>;

export type DataTable<T> = {
  columns: ColumnDef<T>[];
  data?: T[];
  enableRowSelection?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
  enableColumnResizing?: boolean; // Indicates if columns are resizable
  size?: "sm" | "md" | "lg";
  onSortingChange?: (value: SortingState) => void;
  onColumnSizingChange?: (value: ColumnSizingState) => void;
  onRowSelectionChange?: (value: RowSelectionState) => void;
  notFoundMessage?: ReactNode;
};

export function DataTable<T>({
  columns,
  data = [],
  isLoading = false,
  isFetching = false,
  enableRowSelection = false,
  enableColumnResizing = false,
  size = "md",
  notFoundMessage = "No data found",
  ...props
}: DataTable<T>) {
  // State for sorting
  const [sorting, onSortingChange] = useSync<SortingState>(
    [],
    props.onSortingChange,
  );

  // State for column sizing
  const [columnSizing, onColumnSizingChange] = useSync<ColumnSizingState>(
    {},
    props.onColumnSizingChange,
  );

  // React Table instance
  const table = useReactTable({
    data,
    columns,
    enableRowSelection,
    enableColumnResizing,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnSizing,
    },
    onSortingChange,
    onColumnSizingChange,
  });

  // Calculate the colspan for the table content
  const col_span = columns.length;

  const isEmpty = !isLoading && data.length === 0;

  return (
    <div className="w-full">
      <TableContainer
        className={classNames(
          isEmpty && "rounded-b-none",
          "w-full overflow-hidden overflow-x-auto",
        )}
      >
        <Table size={size} className="w-full table-fixed">
          <TableHeader table={table} enableRowSelection={enableRowSelection} />
          <TableContent
            table={table}
            isLoading={isLoading}
            colSpan={col_span}
          />
        </Table>
      </TableContainer>
      {isEmpty && <DataNotFound>{notFoundMessage}</DataNotFound>}
    </div>
  );
}
