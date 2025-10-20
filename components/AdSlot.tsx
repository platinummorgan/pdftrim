'use client'
import { useEffect, useRef } from 'react'

type Props = {
  slot?: string // optional; we'll use auto for review
  style?: React.CSSProperties
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdSlot({ slot, style, className }: Props) {
  const ref = useRef<HTMLModElement>(null)

  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <ins
      ref={ref as any}
      className={`adsbygoogle ${className ?? ''}`}
      style={{ display: 'block', minHeight: 120, ...style }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
      data-ad-slot={slot || '8767874435'}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
