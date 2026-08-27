import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import { posts } from '../content/blog'
import { BlogCover } from '../components/BlogCover'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

export function BlogPage() {
  useEffect(() => {
    document.title = 'Blog | SnapTrader AI'
  }, [])

  return (
    <div className="bg-deep pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep pb-16 pt-16 md:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <h1 className="mb-4 max-w-[640px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              The SnapTrader <span className="text-gradient-brand">Blog</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-dark">
              Risk, strategy, market structure and AI — written for traders who
              want to think clearly before they risk capital.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-deep pb-20 lg:pb-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-navy shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-lg">
                  <Link to={`/blog/${post.slug}`} aria-label={post.title}>
                    <BlogCover category={post.category} />
                  </Link>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-accent">
                        {post.category}
                      </span>
                      <span className="font-mono text-[10px] text-ink-soft">
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                    <h2 className="mb-2 text-base font-bold leading-snug text-ink">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="transition-colors hover:text-accent"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-muted-dark">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-200 hover:gap-3"
                    >
                      <BookOpen className="h-4 w-4" />
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 text-center">
              <p className="mb-6 text-muted-dark">
                New articles every week — subscribe through the Academy or
                follow the newsletter.
              </p>
              <Button to="/academy" size="lg" className="group">
                Learn More in the Academy
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
