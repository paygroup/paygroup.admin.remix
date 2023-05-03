import { useLoaderData, useNavigate } from "@remix-run/react";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { usePagination } from "~/components/pagination";

import { useColumns } from "./columns";
import type { PartnerItem, PartnerPagination } from "./services";

export const useRouteTable = () => {
  const navigate = useNavigate();
  const { columns } = useColumns();
  const data = useLoaderData() as PartnerPagination;

  const paging = usePagination<PartnerItem>({
    items: data.items,
    recordCount: data.recordCount,
    page: data.page,
    onPage: (page) => {
      navigate(`/partners?page=${page}`);
    },
  });

  const { getHeaderGroups, getRowModel } = useReactTable<PartnerItem>({
    columns,
    data: data.items,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return {
    paging,
    getHeaderGroups,
    getRowModel,
  };
};
