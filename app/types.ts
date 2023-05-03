export type RoutesType = {
  name: string;
  icon: JSX.Element | string;
  path: string;
  secondary?: boolean;
};

export type RouteAction<T> = {
  done?: boolean;
  fatal?: string;
  errors?: { [key in keyof T]?: string[] };
};
