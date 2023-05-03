/* eslint-disable react-hooks/exhaustive-deps */

import type { UsePaginationProps } from "./pagination.types";

export const LIMIT = 10;

export function usePagination<T>({
  pageSize = LIMIT,
  page,
  onPage,
  data,
}: UsePaginationProps<T>) {
  const recordCount = data?.count ?? 0;
  const pageCount = Math.ceil(recordCount / pageSize);

  const calcShowing = () => {
    let showing = pageSize * Number(page);
    if (showing > recordCount) {
      showing = recordCount;
    }
    return showing;
  };

  const increasePage = () => onPage?.(Number(page) + 1);
  const decreasePage = () => onPage?.(Number(page) - 1);

  return {
    data,
    itemCount: recordCount,
    pageCount,
    prev: page > 1,
    next: page < pageCount,
    showing: calcShowing(),
    increasePage,
    decreasePage,
  };
}
