import type { ReactNode } from 'react'
import { hireHref, jobsHref } from '@/lib/roles'

export function Header() {
  return <header className="site-header"><a className="wordmark" href="/#top">Digital Things</a><nav className="desktop-nav" aria-label="Primary navigation"><a href="/#roles">Roles we place</a><a href="/#how-we-work">How we work</a><a href="/#why-us">Why us</a></nav><div className="cta-group header-cta"><a className="button button-dark" href={hireHref}>Hire talent</a><a className="button button-outline" href={jobsHref}>Find a role</a></div><details className="mobile-menu"><summary aria-label="Open navigation"><span /><span /><span /></summary><nav aria-label="Mobile navigation"><a href="/#roles">Roles we place</a><a href="/#how-we-work">How we work</a><a href="/#why-us">Why us</a><a href={jobsHref}>Find a role</a></nav></details></header>
}

export function Footer() { return <footer><span>Digital Things Recruitment Agency</span><span>© 2026</span></footer> }
export function SiteShell({ children }: { children: ReactNode }) { return <main><Header />{children}<Footer /></main> }
