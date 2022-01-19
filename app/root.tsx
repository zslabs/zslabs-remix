import type { LinksFunction, MetaFunction } from 'remix'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'

import styles from './styles/app.css'

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    href: '/fonts/Manrope[wght].woff2',
    as: 'font',
    type: 'font/woff2',
  },
  {
    rel: 'preload',
    href: '/fonts/JetBrainsMono[wght].woff2',
    as: 'font',
    type: 'font/woff2',
  },
  { rel: 'stylesheet', href: styles },
]

export const meta: MetaFunction = () => {
  return { title: 'Zach Schnackel' }
}

function RootWrapper({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased overflow-y-scroll overflow-x-hidden font-medium bg-slate-1 text-slate-12">
        <svg className="sr-only">
          <defs>
            <clipPath id="clipHeader" clipPathUnits="userSpaceOnUse">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M800 12C800 5.37258 794.627 0 788 0H12C5.37258 0 0 5.37259 0 12V288C0 294.627 5.37258 300 12 300H328C334.627 300 339.875 294.573 341.185 288.077C346.714 260.652 370.945 240 400 240C429.055 240 453.286 260.652 458.815 288.077C460.125 294.573 465.373 300 472 300H788C794.627 300 800 294.627 800 288V12Z"
              ></path>
            </clipPath>
          </defs>
        </svg>
        <div className="max-w-3xl px-4 mx-auto">{children}</div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <RootWrapper>
      <Outlet />
    </RootWrapper>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <RootWrapper>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </RootWrapper>
  )
}
