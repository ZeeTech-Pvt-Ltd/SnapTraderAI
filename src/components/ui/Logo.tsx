interface LogoProps {
  /** Full wordmark or compact glyph */
  compact?: boolean
  className?: string
}

export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="snap-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00B4E6" />
          <stop offset="1" stopColor="#00C8AC" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#0A1220" />
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="none"
        stroke="url(#snap-grad)"
        strokeWidth="2"
      />
      <path
        d="M18 44 L26 34 L32 40 L40 24 L46 20"
        fill="none"
        stroke="url(#snap-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 18 L46 26 L38 26"
        fill="none"
        stroke="url(#snap-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo({ compact = false, className = '' }: LogoProps) {
  if (compact) return <LogoMark className={className} />

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8" />
      <span className="text-lg font-extrabold tracking-tight text-white">
        Snap Trader <span className="text-gradient-brand">AI</span>
      </span>
    </span>
  )
}
