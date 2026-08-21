import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../content/faq'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

/** Split items into two independent columns so expanding a question
    in one column never shifts the other column. */
const leftColumn = faqs.filter((_, i) => i % 2 === 0)
const rightColumn = faqs.filter((_, i) => i % 2 === 1)

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border bg-medium-navy/40 transition-colors ${
        isOpen ? 'border-accent/40' : 'border-border hover:border-border-light'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-accent' : 'text-ink'}`}>
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={`faq-answer-${index}`}
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-4 text-sm leading-relaxed text-muted-dark">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-y border-border bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title="Frequently Asked Questions"
            description="Everything you need to know before you upload your first chart."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-3">
            {leftColumn.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 80}>
                <FaqItem
                  faq={faq}
                  index={i * 2}
                  isOpen={open === i * 2}
                  onToggle={() => setOpen(open === i * 2 ? null : i * 2)}
                />
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {rightColumn.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 80 + 40}>
                <FaqItem
                  faq={faq}
                  index={i * 2 + 1}
                  isOpen={open === i * 2 + 1}
                  onToggle={() => setOpen(open === i * 2 + 1 ? null : i * 2 + 1)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
