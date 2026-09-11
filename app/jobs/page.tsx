import { RoleAccordion } from '@/components/role-accordion'
import { SiteShell } from '@/components/site-shell'
import { roles } from '@/lib/roles'

export const metadata = { title: 'Open roles | Digital Things', description: 'Explore open technical and business roles with Digital Things.' }

export default function JobsPage() {
  return <SiteShell><div className="page-shell"><section className="jobs-hero" aria-labelledby="jobs-title"><p className="eyebrow">Join the teams building what&apos;s next</p><h1 id="jobs-title">Open roles</h1><p className="lede">A selection of opportunities with ambitious digital teams. Open a role to see what they&apos;re looking for.</p></section><section className="jobs-list" aria-label="Open roles"><RoleAccordion titles={roles.map((role) => role.title)} className="jobs-accordion" /></section></div></SiteShell>
}
