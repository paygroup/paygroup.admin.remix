import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import dayjs from "dayjs";
import relative from "dayjs/plugin/relativeTime";
import nProgressStyles from "nprogress/nprogress.css";

import { useNProgress } from "./modules/nprogress";
import { RootApp } from "./root.app";

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
        <RootApp />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
