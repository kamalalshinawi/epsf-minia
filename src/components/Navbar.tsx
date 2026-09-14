import { NavLink as RouterNavLink } from 'react-router-dom'
import logo from '../assets/images/minia-logo.png'
import type { NavLink } from '../types'
const navigation: NavLink[] = [
  { label: 'Home', path: '/' }, { label: 'Events', path: '/events' }, { label: 'About', path: '/about' }, { label: 'History', path: '/history' }, { label: 'Student Exchange', path: '/student-exchange' }, { label: 'Contact', path: '/contact' },
]
export const Navbar = (): React.JSX.Element => (
  <header className="border-b border-slate-200 bg-white"><nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-6 py-4" aria-label="Primary navigation">
    <RouterNavLink to="/" className="mr-auto flex items-center" aria-label="EPSF Minia home"><img src={logo} alt="EPSF Minia" className="h-10 w-auto" /></RouterNavLink>
    {navigation.map(({ label, path }) => <RouterNavLink key={path} to={path} className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-minia-blue' : 'text-slate-600 hover:text-minia-blue'}`}>{label}</RouterNavLink>)}
  </nav></header>
)
