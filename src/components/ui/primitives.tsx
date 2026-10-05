import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Employee } from '../../types'

type AvatarPerson = Pick<Employee, 'name' | 'initials' | 'color'> | { name: string; initials: string; color?: string }
type AvatarSize = 'normal' | 'small' | 'large'

export function Avatar({ person, size = 'normal' }: { person: AvatarPerson; size?: AvatarSize }) {
  const color = 'color' in person ? person.color || 'plum' : 'plum'
  const letters = person.initials || person.name.split(' ').map(part => part[0]).join('').slice(0, 2)

  return <span className={`avatar ${size} ${color}`} aria-label={person.name}>{letters}</span>
}

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'red' | 'green' | 'blue' }) {
  return <span className={`badge ${tone}`}>{children}</span>
}

export function SectionTitle({ title, action, to }: { title: string; action?: string; to?: string }) {
  return <div className="section-heading"><h2>{title}</h2>{action && to && <Link to={to} className="text-link">{action}<ArrowRight size={14}/></Link>}</div>
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return <div className="page-header"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h1>{title}</h1>{description && <p>{description}</p>}</div>{action}</div>
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="empty-state"><span>⌕</span><b>{title}</b><p>{description}</p></div>
}

export function Skeleton() {
  return <div className="skeleton" aria-label="Loading"><i/><i/><i/></div>
}
