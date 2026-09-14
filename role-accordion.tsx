'use client'

import { useState } from 'react'
import { applicationHref, getRole, type Role } from '@/lib/roles'

function Panel({ role, id }: { role: Role; id: string }) {
  return <div id={id} className="accordion-panel"><div><h4>Requirements</h4><ul>{role.requirements.map((item) => <li key={item}>{item}</li>)}</ul><a className="button button-dark" href={applicationHref(role.title)}>Send application <span aria-hidden="true">↗</span></a></div></div>
}

export function RoleAccordion({ titles, className = '' }: { titles: string[]; className?: string }) {
  const [openTitle, setOpenTitle] = useState<string | null>(null)
  return <div className={`role-accordion ${className}`}>{titles.map((title, index) => { const role = getRole(title); if (!role) return null; const open = openTitle === title; const panelId = `role-panel-${index}`; return <div className="accordion-item" key={title}><button className="accordion-trigger" type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenTitle(open ? null : title)}><span className="role-trigger-copy"><strong>{title}</strong><small>{role.summary}</small></span><span className={`chevron ${open ? 'is-open' : ''}`} aria-hidden="true">⌄</span></button>{open && <Panel role={role} id={panelId} />}</div> })}</div>
}
