import type { ReactNode } from 'react'

interface TerminalFrameProps {
  title: string
  children: ReactNode
  className?: string
  /** Extra element rendered on the right of the title bar (status chips etc.) */
  titleExtra?: ReactNode
}

/** Browser-window chrome around product mockups, tradvio-style. */
export function TerminalFrame({
  title,
  children,
  className = '',
  titleExtra,
}: TerminalFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-[#2A3A52] bg-[#0D1626] shadow-card-xl ${className}`}
    >
      <div className="flex items-center justify-between border-b border-border bg-[#0A1424] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28CA41]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-soft/60">
            {title}
          </span>
        </div>
        {titleExtra && <div className="flex items-center gap-2">{titleExtra}</div>}
      </div>
      {children}
    </div>
  )
}
