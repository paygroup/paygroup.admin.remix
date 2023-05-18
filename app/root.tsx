import { ChakraProvider } from "@chakra-ui/react";
import {
  ClerkCatchBoundary,
  ClerkApp,
  SignIn,
  SignedIn,
  SignedOut,
} from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import type {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { redirect } from "@remix-run/node";
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
import { appTheme } from "./modules/theme";
import { AuthLayout } from "./root.auth.layout";
import { AppLayout } from "./root.layout";

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

export const CatchBoundary = ClerkCatchBoundary();

export const loader: LoaderFunction = (args) =>
  rootAuthLoader(args, ({ request }) => {
    if (!request.auth.userId && !request.url.includes("sign-in")) {
      return redirect("/sign-in");
    }
    return {};
  });

function App() {
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
        <ChakraProvider theme={appTheme}>
          <SignedIn>
            <AppLayout />
          </SignedIn>

          <SignedOut>
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          </SignedOut>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App);
