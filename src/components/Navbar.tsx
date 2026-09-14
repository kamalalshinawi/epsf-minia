import { useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import logo from '../assets/images/minia-logo.png'
import type { NavLink } from '../types'

const ORGANIZATION_NAME = 'EPSF-MINIA'

const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Student Exchange Program', path: '/student-exchange' },
  { label: 'History', path: '/history' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
]

interface NavbarProps {
  organizationName?: string
}

export const Navbar = ({ organizationName = ORGANIZATION_NAME }: NavbarProps): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClassName = ({ isActive }: { isActive: boolean }): string =>
    `text-sm font-bold transition-colors ${isActive
      ? 'text-[#0047ba]'
      : 'text-[#1e293b] hover:text-[#0047ba]'}`

  return (
    <header className="border-b border-black/5 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex h-20 items-center justify-between gap-4 py-2">
          {/* Logo & Brand title */}
          <RouterNavLink to="/" className="flex items-center gap-3" aria-label={`${organizationName} home`}>
            <img
              src={logo}
              alt="EPSF Logo"
              className="h-12 w-auto object-contain sm:h-14 transition-transform duration-200 hover:scale-105"
            />
            <span className="text-lg font-extrabold uppercase tracking-tight text-[#0047ba] sm:text-xl">
              {organizationName}
            </span>
          </RouterNavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-5 lg:flex lg:gap-7">
            {NAVIGATION_LINKS.map(({ label, path }) => (
              <RouterNavLink key={path} to={path} end={path === '/'} className={linkClassName}>
                {label}
              </RouterNavLink>
            ))}
            {/* Vertical Separator Line matching screenshot */}
            <span className="h-5 w-px bg-black/15 ml-1" aria-hidden="true" />
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#0047ba] transition-colors hover:bg-black/5 lg:hidden"
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

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-black/10 py-3 lg:hidden space-y-1">
            {NAVIGATION_LINKS.map(({ label, path }) => (
              <RouterNavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm font-bold transition-colors rounded-md ${
                    isActive ? 'bg-[#0047ba]/10 text-[#0047ba]' : 'text-[#1e293b] hover:bg-black/5 hover:text-[#0047ba]'
                  }`
                }
              >
                {label}
              </RouterNavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
