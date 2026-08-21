interface SparklineProps {
  series: number[]
  width?: number
  height?: number
  positive: boolean
}

/** Minimal SVG sparkline for agent performance columns. */
export function Sparkline({
  series,
  width = 110,
  height = 30,
  positive,
}: SparklineProps) {
  if (series.length < 2) return null
  const min = Math.min(...series)
  const max = Math.max(...series)
  const span = max - min || 1
  const points = series
    .map(
      (v, i) =>
        `${(i / (series.length - 1)) * width},${height - 4 - ((v - min) / span) * (height - 8)}`,
    )
    .join(' ')
  const color = positive ? '#16a34a' : '#dc2626'
  const id = `spark-${positive ? 'p' : 'n'}-${series.length}-${span.toFixed(0)}`

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} ${width},${height}`}
        fill={`url(#${id})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
