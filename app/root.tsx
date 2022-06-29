import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'

import styles from './styles/app.css'

import Icon from '~components/Icon'

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
        <div className="fixed inset-0 pointer-events-none z-10 mix-blend-color-dodge nnnoise" />
        <div className="max-w-3xl px-4 mx-auto">
          <Link to="/" className="text-6xl text-primary-8 drop-shadow-xl">
            <Icon name="logo" />
          </Link>
          <div className="w-20 h-20 bg-primary-9" />
          <Link to="/test/here">Test</Link>
          {children}
          <footer className="text-center text-sm text-slate-11">
            <div>
              Copyright &copy; {new Date().getFullYear()} Zach Schnackel
            </div>
          </footer>
        </div>
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
