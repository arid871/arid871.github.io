import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolio';
import { PROJECT_ARTICLES } from '../data/projectArticles';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-lg font-semibold text-neutral-900 mb-3">{children}</h2>
  );
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const study = CASE_STUDIES.find((s) => s.slug === slug);
  const article = slug ? PROJECT_ARTICLES[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study || !article) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const next = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 h-14 flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Back
          </Link>
        </div>
      </nav>

      <article className="pt-28 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3">
            {study.label}
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            {study.title}
          </h1>

          <div className="flex items-baseline gap-2 mb-8">
            <span className="font-heading text-3xl font-bold text-neutral-900">
              {study.stat}
            </span>
            <span className="text-xs tracking-widest uppercase text-neutral-400">
              {study.statLabel}
            </span>
          </div>

          <div className="w-full aspect-video bg-white border border-neutral-100 rounded-xl mb-10 flex items-center justify-center overflow-hidden">
            <img
              src={study.image}
              alt={study.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12 pb-10 border-b border-neutral-100">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Role</p>
              <p className="text-sm text-neutral-700">{article.role}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Timeframe</p>
              <p className="text-sm text-neutral-700">{article.timeframe}</p>
            </div>
            <div className="max-w-xs">
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Stack</p>
              <p className="text-sm text-neutral-700">{article.techStack.join(' · ')}</p>
            </div>
            {article.links && article.links.length > 0 && (
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Links</p>
                {article.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity mr-4"
                  >
                    {link.label}
                    <ExternalLink size={12} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <section className="mb-10">
            <SectionHeading>Overview</SectionHeading>
            <p className="text-neutral-600 leading-relaxed">{article.overview}</p>
          </section>

          <section className="mb-10">
            <SectionHeading>The Problem</SectionHeading>
            <p className="text-neutral-600 leading-relaxed">{article.problem}</p>
          </section>

          <section className="mb-10">
            <SectionHeading>Approach</SectionHeading>
            <ul className="space-y-3">
              {article.approach.map((point, i) => (
                <li key={i} className="text-neutral-600 leading-relaxed flex gap-3">
                  <span className="text-neutral-300 mt-1">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {article.features && article.features.length > 0 && (
            <section className="mb-10">
              <SectionHeading>Features</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {article.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs text-neutral-600 bg-neutral-50 border border-neutral-100 rounded-full px-3 py-1.5"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </section>
          )}

          {article.featureGroups && article.featureGroups.length > 0 && (
            <section className="mb-10">
              <SectionHeading>Key Features</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {article.featureGroups.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold text-neutral-900 mb-2">{group.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs text-neutral-600 bg-neutral-50 border border-neutral-100 rounded-full px-3 py-1.5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {article.architecture && article.architecture.length > 0 && (
            <section className="mb-10">
              <SectionHeading>System Architecture</SectionHeading>
              <div className="bg-neutral-50 rounded-xl px-6 py-6 font-mono text-sm text-neutral-700">
                {article.architecture.map((step, i) => (
                  <div key={step}>
                    <div className="py-1">{step}</div>
                    {i < article.architecture!.length - 1 && (
                      <div className="text-neutral-300 pl-1">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {article.buildProcess && article.buildProcess.length > 0 && (
            <section className="mb-10">
              <SectionHeading>Build Process</SectionHeading>
              <ol className="space-y-3">
                {article.buildProcess.map((point, i) => (
                  <li key={i} className="text-neutral-600 leading-relaxed flex gap-3">
                    <span className="text-neutral-300 font-medium">{i + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {(article.hardware || article.software) && (
            <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {article.hardware && article.hardware.length > 0 && (
                <div>
                  <SectionHeading>Hardware Used</SectionHeading>
                  <ul className="space-y-1.5">
                    {article.hardware.map((item, i) => (
                      <li key={i} className="text-sm text-neutral-600 flex gap-2">
                        <span className="text-neutral-300">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {article.software && article.software.length > 0 && (
                <div>
                  <SectionHeading>Software Stack</SectionHeading>
                  <ul className="space-y-1.5">
                    {article.software.map((item, i) => (
                      <li key={i} className="text-sm text-neutral-600 flex gap-2">
                        <span className="text-neutral-300">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {article.commands && article.commands.length > 0 && (
            <section className="mb-10">
              <SectionHeading>Commands / Control Logic</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {article.commands.map((cmd) => (
                  <div key={cmd.name} className="border border-neutral-100 rounded-lg px-4 py-3">
                    <p className="text-sm font-semibold text-neutral-900 mb-0.5">{cmd.name}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{cmd.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {article.testing && article.testing.length > 0 && (
            <section className="mb-10">
              <SectionHeading>How It Was Tested</SectionHeading>
              <div className="space-y-5">
                {article.testing.map((t) => (
                  <div key={t.title}>
                    <p className="text-sm font-semibold text-neutral-900 mb-1">{t.title}</p>
                    <p className="text-neutral-600 leading-relaxed text-sm">{t.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {article.testers && article.testers.length > 0 && (
            <section className="mb-10">
              <SectionHeading>User / Peer Testing</SectionHeading>
              <ul className="space-y-1.5">
                {article.testers.map((tester) => (
                  <li key={tester.name} className="text-sm text-neutral-600">
                    <span className="text-neutral-900 font-medium">{tester.name}</span>
                    {' — '}
                    {tester.role}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {article.responsibilities && article.responsibilities.length > 0 && (
            <section className="mb-10">
              <SectionHeading>Project Responsibilities</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {article.responsibilities.map((r) => (
                  <span
                    key={r}
                    className="text-xs text-neutral-600 bg-neutral-50 border border-neutral-100 rounded-full px-3 py-1.5"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </section>
          )}

          {article.challenges && article.challenges.length > 0 && (
            <section className="mb-10">
              <SectionHeading>Technical Challenges</SectionHeading>
              <ul className="space-y-2">
                {article.challenges.map((c, i) => (
                  <li key={i} className="text-neutral-600 leading-relaxed flex gap-3 text-sm">
                    <span className="text-neutral-300 mt-0.5">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-10">
            <SectionHeading>Outcome</SectionHeading>
            <p className="text-neutral-600 leading-relaxed">{article.outcome}</p>
            {article.results && article.results.length > 0 && (
              <ul className="space-y-2 mt-4">
                {article.results.map((r, i) => (
                  <li key={i} className="text-neutral-600 leading-relaxed flex gap-3 text-sm">
                    <span className="text-neutral-300 mt-0.5">—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {article.futureImprovements && article.futureImprovements.length > 0 && (
            <section className="mb-10">
              <SectionHeading>Future Improvements</SectionHeading>
              <ul className="space-y-2">
                {article.futureImprovements.map((point, i) => (
                  <li key={i} className="text-neutral-600 leading-relaxed flex gap-3 text-sm">
                    <span className="text-neutral-300 mt-0.5">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {article.summary && (
            <section className="mb-10 bg-neutral-50 rounded-xl px-6 py-5">
              <p className="text-neutral-600 leading-relaxed text-sm italic">{article.summary}</p>
            </section>
          )}

          {article.diagrams && article.diagrams.length > 0 && (
            <section className="mb-16">
              <SectionHeading>Wiring Diagram</SectionHeading>
              <div className="space-y-6">
                {article.diagrams.map((d, i) => (
                  <div key={i}>
                    <img
                      src={d.image}
                      alt={d.caption}
                      className="w-full rounded-lg border border-neutral-100 shadow-sm mb-2 bg-white"
                    />
                    <p className="text-xs text-neutral-400">{d.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {article.certifications && article.certifications.length > 0 && (
            <section className="mb-16">
              <SectionHeading>
                <span className="inline-flex items-center gap-2">
                  <Award size={16} strokeWidth={1.5} />
                  Certification
                </span>
              </SectionHeading>
              <div className="space-y-6">
                {article.certifications.map((cert, i) => (
                  <div key={i}>
                    <img
                      src={cert.image}
                      alt={cert.caption}
                      className="w-full max-w-md rounded-lg border border-neutral-100 shadow-sm mb-2"
                    />
                    <p className="text-xs text-neutral-400">{cert.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="pt-10 border-t border-neutral-100 flex items-center justify-between">
            <Link
              to="/#projects"
              className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              ← All projects
            </Link>
            <Link
              to={`/projects/${next.slug}`}
              className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-neutral-900 border-b border-neutral-900 pb-px hover:opacity-60 transition-opacity"
            >
              Next: {next.title}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
