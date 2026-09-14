import { NavLink as RouterNavLink } from 'react-router-dom'
import type { NavLink } from '../types'

const QUICK_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'History', path: '/history' },
  { label: 'Student Exchange Program', path: '/student-exchange' },
  { label: 'Events', path: '/events' },
  { label: 'Contact Us', path: '/contact' },
]

interface FooterProps {
  organizationName?: string
  address?: string
  phone?: string
  email?: string
}

export const Footer = ({
  organizationName = 'Organization Name',
  address = 'Organization Address, City, Country',
  phone = '+00 000 000 0000',
  email = 'info@organization.org',
}: FooterProps): React.JSX.Element => (
  <footer className="mt-auto bg-primary text-slate-200">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
      <section aria-labelledby="footer-organization">
        <h2 id="footer-organization" className="text-lg font-bold text-white">{organizationName}</h2>
        <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">Serving our community through partnership, leadership, and public engagement.</p>
      </section>

      <section aria-labelledby="footer-links">
        <h2 id="footer-links" className="text-sm font-bold uppercase tracking-wider text-secondary">Quick Links</h2>
        <ul className="mt-4 space-y-2">
          {QUICK_LINKS.map(({ label, path }) => <li key={path}><RouterNavLink to={path} className="text-sm text-slate-300 transition-colors hover:text-white">{label}</RouterNavLink></li>)}
        </ul>
      </section>

      <section aria-labelledby="footer-contact">
        <h2 id="footer-contact" className="text-sm font-bold uppercase tracking-wider text-secondary">Contact Information</h2>
        <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-slate-300">
          <p>{address}</p>
          <p><a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="transition-colors hover:text-white">{phone}</a></p>
          <p><a href={`mailto:${email}`} className="transition-colors hover:text-white">{email}</a></p>
        </address>
      </section>
    </div>
    <div className="border-t border-white/15 px-5 py-5 text-center text-sm text-slate-300 sm:px-6 lg:px-8">© 2026 {organizationName}. All rights reserved.</div>
  </footer>
)
