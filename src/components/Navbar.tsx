import { useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import logo from '../assets/images/minia-logo.png'
import type { NavLink } from '../types'

const ORGANIZATION_NAME = 'EPSF-MINIA'

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
    `border-b-2 px-1 py-3 text-sm font-bold uppercase transition-colors ${isActive
      ? 'border-[#215E99] text-[#215E99]'
      : 'border-transparent text-black hover:border-[#215E99] hover:text-[#215E99]'}`

  return (
    <header className="border-b border-black/10 bg-white shadow-xs">
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex min-h-24 items-center justify-between gap-4 py-2">
          <RouterNavLink to="/" className="flex items-center gap-3 text-[#215E99]" aria-label={`${organizationName} home`}>
            <img
              src={logo}
              alt="EPSF-MINIA Official Logo"
              className="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24 transition-transform duration-200 hover:scale-105"
            />
            <span className="text-lg font-extrabold uppercase tracking-wider sm:text-xl md:text-2xl text-[#215E99]">
              {organizationName}
            </span>
          </RouterNavLink>

          <div className="hidden items-center gap-5 lg:flex lg:gap-7">
            {NAVIGATION_LINKS.map(({ label, path }) => (
              <RouterNavLink key={path} to={path} end={path === '/'} className={linkClassName}>{label}</RouterNavLink>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 text-[#215E99] transition-colors hover:bg-black/5 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isMenuOpen ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-black/10 py-2 lg:hidden">
            {NAVIGATION_LINKS.map(({ label, path }) => (
              <RouterNavLink key={path} to={path} end={path === '/'} onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>
                `block border-l-2 px-4 py-3 text-sm font-bold uppercase transition-colors ${isActive ? 'border-[#215E99] bg-black/5 text-[#215E99]' : 'border-transparent text-black hover:border-[#215E99] hover:bg-black/5 hover:text-[#215E99]'}`
              }>{label}</RouterNavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
