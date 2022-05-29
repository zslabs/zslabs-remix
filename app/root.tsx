import type { LinksFunction, MetaFunction } from 'remix'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'

import ctl from '@netlify/classnames-template-literals'
import type { Transition } from 'framer-motion'
import { motion } from 'framer-motion'

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

const logoOpacityInitial = { opacity: 0.5 }
const logoOpacityAnimate = { opacity: 1 }
const logoScaleInitial = { scale: 0.5 }
const logoScaleAnimate = { scale: 1 }
const logoTransition: Transition = {
  duration: 5,
  repeat: Infinity,
  repeatType: 'reverse',
}

function RootWrapper({ children }: { children: React.ReactNode }) {
  const logoGradientStyle = {
    '--direction': 'to bottom right',
    '--from': 'var(--slate3)',
    '--to': 'var(--slate1)',
  } as React.CSSProperties

  const logoGradientBlurStyle = {
    '--direction': 'to bottom right',
    '--from': 'var(--blue9)',
    '--to': 'var(--violet9)',
  } as React.CSSProperties

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased overflow-y-scroll overflow-x-hidden font-medium bg-slate-1 text-slate-12">
        <motion.div
          className="fixed inset-0 -z-1 bg-gradient-to-br from-primary-9 to-accent-9 texture"
          initial={logoOpacityInitial}
          animate={logoOpacityAnimate}
          transition={logoTransition}
        />
        <motion.div
          className="fixed inset-0 -z-1 bg-gradient-to-b from-overlay-1 to-slate-1"
          initial={logoScaleInitial}
          animate={logoScaleAnimate}
          transition={logoTransition}
        />

        <div className="max-w-3xl px-4 mx-auto">
          <Link to="/" className="group">
            <div className="text-6xl text-slate-1 relative my-8">
              <Icon name="logo" gradient style={logoGradientStyle} />
              <div className="w-[60px] h-[60px] absolute inset-0 -z-1 scale-105 blur-md duration-150 opacity-75 group-hover:opacity-100">
                <Icon name="logo" gradient style={logoGradientBlurStyle} />
              </div>
            </div>
          </Link>
          <Link to="/test/here">Test</Link>
          {children}
          <footer
            className={ctl(`
            text-center
            text-sm
            text-slate-11
          `)}
          >
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
