import { MILESTONES } from '../../data/portfolio';
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

export function Timeline() {
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
              <div className="bg-white p-8 text-center flex flex-col items-center h-full">
                <span className="text-3xl mb-4">{item.emoji}</span>
                <p className="text-sm text-neutral-400 mb-2 font-sans">{item.year}</p>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="sm:hidden space-y-0 border-l-2 border-neutral-200 ml-4">
          {MILESTONES.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="pl-6 pb-8 relative">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
