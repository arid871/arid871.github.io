import { useEffect, useState } from 'react';
import { PERSONAL } from '../../data/portfolio';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-20 pt-20 md:pt-0"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div
          className={`order-2 md:order-1 transition-all duration-[900ms] ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4 font-sans">
            Portfolio
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.08] mb-4">
            {PERSONAL.name}
          </h1>
          <p className="text-sm md:text-base text-neutral-500 leading-relaxed mb-8 max-w-md font-sans">
            {PERSONAL.title}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:border-neutral-400 transition-all"
            >
              <Mail size={15} strokeWidth={1.5} />
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:border-neutral-400 transition-all"
            >
              <Github size={15} strokeWidth={1.5} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:border-neutral-400 transition-all"
            >
              <Linkedin size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div
          className={`order-1 md:order-2 flex justify-center md:justify-end transition-all duration-[900ms] delay-200 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="w-full max-w-sm md:max-w-none md:w-full aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-100 shadow-[0_2px_24px_rgba(0,0,0,0.06)]">
            <img
              src={PERSONAL.photo}
              alt={PERSONAL.name}
              className="w-full h-full object-cover object-[center_70%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
