'use client'

import { useState, type FormEvent } from 'react'
import { contactEmail } from '@/lib/roles'

export function FooterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Hiring inquiry from ${name || 'website'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <form className="footer-form" onSubmit={onSubmit}>
      <p className="footer-form-title">Tell us who you&apos;re looking for</p>
      <div className="footer-form-row">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <textarea placeholder="Message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
      <button className="button button-light" type="submit">Send <span aria-hidden="true">↗</span></button>
    </form>
  )
}
