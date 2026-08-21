import { trustStrip } from '../../content/trust'
import { Reveal } from '../ui/Reveal'

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-navy py-6">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex items-start gap-2.5">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-[0.85rem] font-bold leading-tight text-ink">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-tight text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
