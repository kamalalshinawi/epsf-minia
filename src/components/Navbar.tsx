import { useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import logo from '../assets/images/minia-logo.png'
import type { NavLink } from '../types'

const ORGANIZATION_NAME = 'Organization Name'

const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'History', path: '/history' },
  { label: 'Student Exchange Program', path: '/student-exchange' },
  { label: 'Events', path: '/events' },
  { label: 'Contact Us', path: '/contact' },
]

interface NavbarProps {
  organizationName?: string
}

export const Navbar = ({ organizationName = ORGANIZATION_NAME }: NavbarProps): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const linkClassName = ({ isActive }: { isActive: boolean }): string =>
    `border-b-2 px-1 py-3 text-sm font-semibold transition-colors ${isActive
      ? 'border-secondary text-primary'
      : 'border-transparent text-slate-600 hover:border-secondary hover:text-primary'}`

  return (
    <header className="border-b border-slate-200 bg-background">
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <RouterNavLink to="/" className="flex items-center gap-3 text-primary" aria-label={`${organizationName} home`}>
            <img src={logo} alt="" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
            <span className="text-base font-bold tracking-tight sm:text-lg">{organizationName}</span>
          </RouterNavLink>

          <div className="hidden items-center gap-5 lg:flex lg:gap-7">
            {NAVIGATION_LINKS.map(({ label, path }) => (
              <RouterNavLink key={path} to={path} end={path === '/'} className={linkClassName}>{label}</RouterNavLink>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 text-primary transition-colors hover:bg-background-muted lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isMenuOpen ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-slate-200 py-2 lg:hidden">
            {NAVIGATION_LINKS.map(({ label, path }) => (
              <RouterNavLink key={path} to={path} end={path === '/'} onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>
                `block border-l-2 px-4 py-3 text-sm font-semibold transition-colors ${isActive ? 'border-secondary bg-background-muted text-primary' : 'border-transparent text-slate-600 hover:border-secondary hover:bg-background-muted hover:text-primary'}`
              }>{label}</RouterNavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
