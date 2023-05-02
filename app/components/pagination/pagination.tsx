import { PaginationComponent } from "./pagination.components";
import type { UsePaginationProps } from "./pagination.types";
import { usePagination } from "./pagination.use";

export function Pagination<T>({
  page,
  data,
  pageSize,
  onPage,
}: UsePaginationProps<T>) {
  const paging = usePagination({
    data,
    page,
    pageSize,
    onPage: onPage,
  });

  return (
    <PaginationComponent
      {...paging}
      page={page}
      onChange={onPage}
      goNext={paging.increasePage}
      goPrev={paging.decreasePage}
    />
  );
}
