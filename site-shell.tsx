import type { ReactNode } from 'react'
import { hireHref, jobsHref } from '@/lib/roles'
import { ScrollProgress } from '@/components/scroll-progress'
import { FooterForm } from '@/components/footer-form'

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
              <ul>
                <li><a href="mailto:digitaltechrec@gmail.com">digitaltechrec@gmail.com</a></li>
                <li><a href={jobsHref}>Find a role</a></li>
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
