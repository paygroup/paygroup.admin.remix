import { Box } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";

import { PageContent } from "./modules/page-view";
import { SideBar } from "./modules/sidebar";
import { routeLinks } from "./root.route-links";

export const AppLayout = () => (
  <Box flex={1} className="root">
    <SideBar routes={routeLinks} />
    <PageContent>
      <Outlet />
    </PageContent>
  </Box>
);
