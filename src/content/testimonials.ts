export interface Testimonial {
  quote: string
  name: string
  role: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The chart analyser gives me a structured second opinion. I still make my own calls, but having AI flag levels I might have missed has made me a more thorough trader.',
    name: 'Sarah M.',
    role: 'Swing Trader',
    rating: 5,
  },
  {
    quote:
      'Paper trading before going live was the best advice. I spent two months testing strategies with virtual funds. It saved me from some expensive beginner mistakes.',
    name: 'David K.',
    role: 'Day Trader',
    rating: 5,
  },
  {
    quote:
      'I like that every signal carries a confidence score and a data label. Buy, sell, hold — I know how strongly the AI feels. Most platforms blur these lines.',
    name: 'Priya R.',
    role: 'Forex Trader',
    rating: 4,
  },
]
