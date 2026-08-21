import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeader({
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClasses =
    align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'

  return (
    <div className={`mb-10 md:mb-14 ${alignClasses} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-ink-soft leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
