import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

import styles from "./styles/app.css";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/fonts/Manrope[wght].woff2",
    as: "font",
    type: "font/woff2",
  },
  {
    rel: "preload",
    href: "/fonts/JetBrainsMono[wght].woff2",
    as: "font",
    type: "font/woff2",
  },
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
