import { useMatches } from "@remix-run/react";

export const useRouteHandles = () => {
  let handles = useMatches().filter((h) => !!h.handle);

  if (!handles.find((h) => h.pathname === "/home")) {
    handles = [
      {
        id: "routes/home",
        params: {},
        data: {},
        pathname: "/home",
        handle: { title: "home" },
      },
      ...handles,
    ];
  }

  return handles;
};
