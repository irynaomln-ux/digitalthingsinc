import type { ReactNode } from 'react'
import { contactEmail, hireHref, jobsHref, linkedinHref } from '@/lib/roles'
import { ScrollProgress } from '@/components/scroll-progress'
import { FooterForm } from '@/components/footer-form'

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function Header() {
  return (
    <>
      <ScrollProgress />
      <header className="site-header">
        <a className="wordmark" href="/#top">Digital Things</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/#roles">Roles we place</a>
          <a href="/#how-we-work">How we work</a>
          <a href="/#why-us">Why us</a>
        </nav>
        <div className="cta-group header-cta">
          <a className="button button-dark" href={hireHref}>Hire talent</a>
          <a className="button button-outline" href={jobsHref}>Find a role</a>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            <a href="/#roles">Roles we place</a>
            <a href="/#how-we-work">How we work</a>
            <a href="/#why-us">Why us</a>
            <a href={jobsHref}>Find a role</a>
          </nav>
        </details>
      </header>
    </>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div className="footer-top">
          <a className="footer-wordmark" href="/#top">Digital Things</a>
          <p className="footer-lede">Reach out — we typically reply within one business day.</p>
          <div className="footer-columns">
            <div>
              <p className="footer-col-title">Pages</p>
              <ul>
                <li><a href="/#top">Home</a></li>
                <li><a href="/#roles">Roles we place</a></li>
                <li><a href="/#how-we-work">How we work</a></li>
                <li><a href="/#why-us">Why us</a></li>
              </ul>
            </div>
            <div>
              <p className="footer-col-title">Contact</p>
              <ul className="footer-social">
                <li><a href={linkedinHref} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LinkedIn</a></li>
                <li><a href={`mailto:${contactEmail}`}><MailIcon /> {contactEmail}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <FooterForm />
      </div>
      <div className="page-shell footer-bottom">
        <span>Digital Things Recruitment Agency</span>
        <span>© 2026</span>
      </div>
    </footer>
  )
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
