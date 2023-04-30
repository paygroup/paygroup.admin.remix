import { Box } from "@chakra-ui/react";

import type { RoutesType } from "~/types";

import { LayoutMain } from "./layout.main";
import { SideBar } from "../sidebar";

export const RootLayout = ({
  routes,
  children,
}: React.PropsWithChildren<{ routes: RoutesType[] }>) => (
  <Box>
    <SideBar routes={routes} />
    <LayoutMain>{children}</LayoutMain>?
  </Box>
);
