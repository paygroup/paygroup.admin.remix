import { routeLinks } from "~/root.route-links";

import { MainContent } from "./page.layouts";
import { PageNavbar } from "./page.navbar";

export const PageView = ({
  pageTitle,
  children,
}: React.PropsWithChildren<{ pageTitle?: string }>) => (
  <>
    <PageNavbar routes={routeLinks} pageTitle={pageTitle} />
    <MainContent>{children}</MainContent>
  </>
);
