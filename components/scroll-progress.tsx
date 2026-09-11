'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      setProgress(height > 0 ? Math.min(100, (scrolled / height) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}
