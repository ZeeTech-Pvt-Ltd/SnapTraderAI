import { coverByCategory } from '../content/blog'

export function BlogCover({ category, tall = false }: { category: string; tall?: boolean }) {
  const cover = coverByCategory(category)
  return (
    <div
      className={`relative w-full overflow-hidden ${tall ? 'aspect-[16/6]' : 'aspect-[16/7]'}`}
      style={{ background: `linear-gradient(135deg, ${cover.from}, ${cover.to})` }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 400 175"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <circle cx="330" cy="40" r="70" fill="white" opacity="0.08" />
        <circle cx="60" cy="150" r="90" fill="white" opacity="0.06" />
        <circle cx="200" cy="180" r="120" fill="white" opacity="0.05" />
      </svg>
      <cover.icon
        aria-hidden="true"
        className="absolute -bottom-5 -right-3 h-24 w-24 text-white/25"
      />
    </div>
  )
}
