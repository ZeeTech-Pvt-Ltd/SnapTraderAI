import { ChevronDown } from 'lucide-react'

interface FilterSelectProps {
  label: string
  value: string
  options: string[]
  onChange: (v: string) => void
}

export function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="relative inline-flex h-[42px] min-w-[150px] cursor-pointer items-center overflow-hidden rounded-lg border border-border bg-navy shadow-card">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-full w-full cursor-pointer appearance-none bg-transparent px-4 pr-9 text-xs font-semibold text-ink outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4 text-ink-soft" />
    </label>
  )
}
