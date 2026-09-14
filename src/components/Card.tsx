import type { ReactNode } from 'react'
interface CardProps { children: ReactNode; className?: string }
export const Card = ({ children, className = '' }: CardProps): React.JSX.Element => <article className={`rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 ${className}`}>{children}</article>
