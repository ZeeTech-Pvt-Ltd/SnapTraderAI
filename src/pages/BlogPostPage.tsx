import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { posts } from '../content/blog'
import { localizedPath, resolveLocalizedSlug } from '../i18n'
import { BlogCover } from '../components/BlogCover'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  // The URL slug may be in any supported language — resolve it to English.
  const englishSlug = resolveLocalizedSlug(posts.map((p) => p.slug), slug ?? '')
  const post = posts.find((p) => p.slug === englishSlug)

  useEffect(() => {
    document.title = post ? `${post.title} | SnapTrader AI` : 'Blog | SnapTrader AI'
    window.scrollTo(0, 0)
  }, [post])

  if (!post) {
    return (
      <div className="bg-deep pt-[72px]">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center md:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-ink">Post Not Found</h1>
          <p className="mb-8 text-muted-dark">
            That article doesn&apos;t exist — or it moved to a better stop.
          </p>
          <Button to="/blog" size="lg">
            Back to Blog
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-deep pt-[72px]">
      {/* Article header */}
      <section className="relative overflow-hidden bg-deep pb-10 pt-14 md:pt-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <Link
              to={localizedPath('/blog')}
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 overflow-hidden rounded-2xl border border-border shadow-card-lg">
                <BlogCover category={post.category} tall />
              </div>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-accent">
                  {post.category}
                </span>
                <span className="font-mono text-[11px] text-ink-soft">
                  {post.date} · {post.readTime}
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-black leading-[1.15] tracking-tight text-ink md:text-4xl lg:text-[2.6rem]">
                {post.title}
              </h1>
              <p className="text-lg leading-relaxed text-muted-dark">{post.excerpt}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-deep pb-20 lg:pb-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <article className="mx-auto max-w-3xl">
              {post.body.map((paragraph, i) => (
                <p
                  key={i}
                  className={`mb-5 leading-relaxed text-muted-dark md:text-lg ${
                    i === 0 ? 'text-lg font-semibold text-ink md:text-xl' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-navy p-8 text-center shadow-card">
              <h2 className="mb-2 text-xl font-extrabold text-ink md:text-2xl">
                Put the ideas into practice{' '}
                <span className="text-gradient-brand">with the AI.</span>
              </h2>
              <p className="mb-6 text-sm text-muted-dark">
                Grade your next setup, test your strategy or read the live
                leaderboard — free to start.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button to="/get-started" size="lg" className="group">
                  Start Free Access
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button to="/blog" variant="outline" size="lg">
                  <BookOpen className="h-4 w-4" />
                  More Articles
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
