import { useLoaderData, useNavigate } from "@remix-run/react";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useColumns } from "./columns";
import type { Item, PartnerPagination } from "./services";
import { PAGE_SIZE } from "./services";

export const useRouteTable = () => {
  const navigate = useNavigate();
  const { columns } = useColumns();
  const data = useLoaderData() as PartnerPagination;

  const {
    getHeaderGroups,
    getRowModel,
    getCanNextPage,
    getCanPreviousPage,
    getPageCount,
    nextPage,
    previousPage,
  } = useReactTable<Item>({
    columns,
    data: data.items,
    manualPagination: true,
    pageCount: data.pageCount,
    state: {
      pagination: {
        pageIndex: data.page,
        pageSize: PAGE_SIZE,
      },
    },
    onPaginationChange: (nextPagination: any) => {
      const next = nextPagination({
        pageIndex: data.page,
        pageSize: PAGE_SIZE,
      });
      navigate(`/partners?page=${next.pageIndex}`);
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return {
    data,
    getHeaderGroups,
    getRowModel,
    getCanNextPage,
    getCanPreviousPage,
    getPageCount,
    nextPage,
    previousPage,
  };
};
