import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../../data/portfolio';
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

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-12">
            Selected Projects
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.index} delay={i * 100}>
              <Link
                to={`/projects/${study.slug}`}
                className="group block transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div className="overflow-hidden rounded-xl mb-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300 bg-white border border-neutral-100 aspect-[4/3] flex items-center justify-center">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">
                  {study.label}
                </p>
                <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2 group-hover:text-neutral-500 transition-colors">
                  {study.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-neutral-400 group-hover:text-neutral-800 transition-colors">
                  Read case study
                  <ArrowRight
                    size={11}
                    strokeWidth={1.5}
                    className="group-hover:translate-x-0.5 transition-transform duration-300"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
