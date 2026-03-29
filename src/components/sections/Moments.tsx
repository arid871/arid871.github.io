import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES, type CaseStudy } from '../../data/portfolio';
import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CaseModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-neutral-400 hover:text-neutral-800 text-xs tracking-widest uppercase z-10"
        >
          Close
        </button>
        <img
          src={study.image}
          alt={study.title}
          className="w-full aspect-video object-cover rounded-t-xl"
        />
        <div className="p-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">
            {study.label}
          </p>
          <h3 className="font-heading text-2xl font-semibold text-neutral-900 mb-3">{study.title}</h3>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-heading text-3xl font-bold text-neutral-900">{study.stat}</span>
            <span className="text-xs tracking-widest uppercase text-neutral-400">
              {study.statLabel}
            </span>
          </div>
          <p className="text-neutral-500 leading-relaxed text-sm">{study.description}</p>
        </div>
      </div>
    </div>
  );
}

export function Moments() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <section id="moments" className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-12">
            Selected Projects
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.index} delay={i * 100}>
              <article
                className="group cursor-pointer"
                onClick={() => setSelected(study)}
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">
                  {study.label}
                </p>
                <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2 group-hover:text-neutral-500 transition-colors">
                  {study.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-neutral-400 group-hover:text-neutral-800 transition-colors">
                  View
                  <ArrowRight
                    size={11}
                    strokeWidth={1.5}
                    className="group-hover:translate-x-0.5 transition-transform duration-300"
                  />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <CaseModal study={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
