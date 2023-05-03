/* eslint-disable react-hooks/exhaustive-deps */

import { useMemo } from "react";

import { PAGE_SIZE } from "~/constants";

import type { UsePaginationProps } from "./pagination.types";

export function usePagination<T>({
  page,
  items,
  recordCount = 0,
  pageSize = PAGE_SIZE,
  onPage,
}: UsePaginationProps<T>) {
  const pageCount = Math.ceil(recordCount / pageSize);

  const showing = useMemo(() => {
    let showing = pageSize * Number(page);
    if (showing > recordCount) {
      showing = recordCount;
    }
    return showing;
  }, [page, pageSize]);

  const increasePage = () => onPage?.(Number(page) + 1);
  const decreasePage = () => onPage?.(Number(page) - 1);

  return {
    page,
    items,
    showing,
    recordCount,
    pageCount,
    canGoPrevious: page > 1,
    canGoNext: page < pageCount,
    goNext: increasePage,
    goPrevious: decreasePage,
  };
}
