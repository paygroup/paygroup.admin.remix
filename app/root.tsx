import { ChakraProvider } from "@chakra-ui/react";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { RootLayout } from "./modules/layout";
import { theme } from "./modules/theme";
import { routeMenus } from "./root.menus";

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
          <RootLayout routes={routeMenus}>
            <Outlet />
          </RootLayout>
        </ChakraProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
