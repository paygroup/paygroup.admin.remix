import { Box } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";

import { PageContent, PageNavbar, MainContent } from "./modules/page";
import { SideBar } from "./modules/sidebar";
import { routeLinks } from "./root.route-links";

export const RootApp = () => (
  <Box flex={1} className="root">
    <SideBar routes={routeLinks} />
    <PageContent>
      <PageNavbar routes={routeLinks} />
      <MainContent>
        <Outlet />
      </MainContent>
    </PageContent>
  </Box>
);
