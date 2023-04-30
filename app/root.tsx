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

import { SideBar } from "./modules/sidebar";
import { theme } from "./modules/theme";
import { MainContent, PageContent } from "./root.layouts";
import { PageNavbar } from "./root.navbar";
import { routeLinks } from "./root.route-links";

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
    // crossOrigin: "true",
  },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap",
  },
];

export const meta: V2_MetaFunction = () => [{ title: "Paygroup admin" }];

export default function App() {
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
          <Box>
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
