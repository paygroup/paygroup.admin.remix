import { Icon } from "@chakra-ui/react";
import { MdHome, MdBarChart } from "react-icons/md";

import type { RoutesType } from "./types";

export const routeMenus: RoutesType[] = [
  {
    name: "Home",
    path: "/",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Partners",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/partners",
  },
];
