import { useEffect, useState } from 'react';
import { MILESTONES, type Milestone } from '../../data/portfolio';
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

function MilestoneModal({ item, onClose }: { item: Milestone; onClose: () => void }) {
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
        <div className="p-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">
            {item.year}
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-4">
            {item.title}
          </h3>
          <img
            src={item.image}
            alt={item.title}
            className="w-full rounded-lg border border-neutral-100"
          />
          <p className="text-sm text-neutral-500 leading-relaxed mt-4">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export function Timeline() {
  const [selected, setSelected] = useState<Milestone | null>(null);

  return (
    <section id="milestones" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-12 text-center">
            Milestones
          </h2>
        </Reveal>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {MILESTONES.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                onClick={item.image ? () => setSelected(item) : undefined}
                className={`bg-white p-8 text-center flex flex-col items-center h-full transition-all duration-300 ease-out relative ${
                  item.image
                    ? 'cursor-pointer hover:-translate-y-1 hover:z-10 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]'
                    : ''
                }`}
              >
                <span className="text-3xl mb-4">{item.emoji}</span>
                <p className="text-sm text-neutral-400 mb-2 font-sans">{item.year}</p>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  {item.description}
                </p>
                {item.image && (
                  <span className="text-[10px] tracking-widest uppercase text-neutral-300 mt-3">
                    View
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="sm:hidden space-y-0 border-l-2 border-neutral-200 ml-4">
          {MILESTONES.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                onClick={item.image ? () => setSelected(item) : undefined}
                className={`pl-6 pb-8 relative ${item.image ? 'cursor-pointer active:opacity-60 transition-opacity' : ''}`}
              >
                <span className="absolute -left-3.5 top-0 w-6 h-6 bg-white border-2 border-neutral-200 rounded-full flex items-center justify-center text-sm">
                  {item.emoji}
                </span>
                <p className="text-xs text-neutral-400 mb-1 font-sans">{item.year}</p>
                <h3 className="text-sm font-semibold text-neutral-900 mb-1 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  {item.description}
                </p>
                {item.image && (
                  <span className="text-[10px] tracking-widest uppercase text-neutral-300 mt-1 inline-block">
                    View
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <MilestoneModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
