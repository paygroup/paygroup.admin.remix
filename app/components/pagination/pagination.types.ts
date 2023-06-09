import type { StringOrNumber } from "@chakra-ui/utils";
export type FocusStatus = "idle" | "focus-in" | "focus-out";

export type UsePaginationProps<T> = {
  items: T[];
  page: number;
  pageSize?: number;
  recordCount: number;
  onPage: (page?: StringOrNumber | undefined) => void;
};

export type PageButtonProps = {
  icon: string;
  click: () => void;
  enabled: boolean;
  className?: string;
};

export type PaginationInput = {
  limit?: number;
  offset: number;
};

export type PaginationResult<T> = {
  count: number;
  nodes: T[];
};

type QueryFnArgs = { limit: number; offset: number };
export type QueryFn<T> = (args: QueryFnArgs) => Promise<PaginationResult<T>>;

export type MakeCountable<T> = T & {
  index: number;
};

export type PaginationProps = {
  showing: number;
  itemCount: number;
  pageCount: number;
  page: StringOrNumber;
  onChange: (page?: StringOrNumber) => void;
  next: boolean;
  prev: boolean;
  goNext: () => void;
  goPrev: () => void;
};
