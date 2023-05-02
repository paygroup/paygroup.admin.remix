export type RouteAction<T> = {
  done?: boolean;
  fatal?: string;
  errors?: { [key in keyof T]?: string[] };
};
