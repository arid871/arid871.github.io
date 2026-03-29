import { VISION, AFFILIATIONS } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}

export function AboutBlock() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-5">
                About
              </h3>
              <p className="font-heading text-xl md:text-2xl font-medium text-neutral-800 leading-[1.5]">
                {VISION}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-5">
                Background
              </h3>
              <ul className="space-y-3">
                {AFFILIATIONS.map((item, i) => (
                  <li
                    key={i}
                    className="text-neutral-600 text-sm leading-relaxed pl-3 border-l-2 border-neutral-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
