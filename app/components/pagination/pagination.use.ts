/* eslint-disable react-hooks/exhaustive-deps */

import type { UsePaginationProps } from "./pagination.types";

export const LIMIT = 10;

export function usePagination<T>({
  pageSize = LIMIT,
  page,
  onPage,
  data,
}: UsePaginationProps<T>) {
  const itemCount = data?.count ?? 0;
  const pageCount = Math.ceil(itemCount / pageSize);

  const calcShowing = () => {
    let showing = pageSize * Number(page);
    if (showing > itemCount) {
      showing = itemCount;
    }
    return showing;
  };

  const increasePage = () => onPage?.(Number(page) + 1);
  const decreasePage = () => onPage?.(Number(page) - 1);

  return {
    itemCount,
    pageCount,
    data,
    prev: page > 1,
    next: page < pageCount,
    showing: calcShowing(),
    increasePage,
    decreasePage,
  };
}
