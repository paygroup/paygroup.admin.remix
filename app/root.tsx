import { Box, ChakraProvider } from "@chakra-ui/react";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import dayjs from "dayjs";
import relative from "dayjs/plugin/relativeTime";
import nProgressStyles from "nprogress/nprogress.css";

import { useNProgress } from "./modules/nprogress";
import { MainContent, PageContent, PageNavbar } from "./modules/page";
import { SideBar } from "./modules/sidebar";
import { theme } from "./modules/theme";
import { routeLinks } from "./root.route-links";

dayjs.extend(relative);

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap",
  },
  { rel: "stylesheet", href: nProgressStyles },
];

export const meta: V2_MetaFunction = () => [{ title: "Paygroup admin" }];

export default function App() {
  useNProgress();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <ChakraProvider theme={theme}>
          <Box flex={1} className="root">
            <SideBar routes={routeLinks} />
            <PageContent>
              <PageNavbar routes={routeLinks} />
              <MainContent>
                <Outlet />
              </MainContent>
            </PageContent>
          </Box>
        </ChakraProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
