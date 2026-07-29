import { useEffect, useState } from 'react';
import { MOMENTS } from '../../data/portfolio';
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

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white text-xs tracking-widest uppercase"
      >
        Close
      </button>
      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl"
      />
    </div>
  );
}

export function Moments() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="moments" className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            Moments
          </h2>
          <p className="text-neutral-500 text-sm mb-16 max-w-md">
            A few highlights along the way — recognitions and milestones worth remembering.
          </p>
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {MOMENTS.map((moment, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={moment.title} delay={i * 100}>
                <div
                  className={`flex flex-col md:flex-row gap-8 md:gap-14 items-center ${
                    reversed ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2 relative">
                    <button
                      onClick={() => setLightbox(moment.images[0])}
                      className="block w-full aspect-[4/3] rounded-xl overflow-hidden border border-neutral-100 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition-shadow duration-300"
                    >
                      <img
                        src={moment.images[0]}
                        alt={moment.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </button>
                    {moment.images[1] && (
                      <button
                        onClick={() => setLightbox(moment.images[1])}
                        className={`hidden md:block absolute -bottom-6 ${
                          reversed ? '-left-6 -rotate-3' : '-right-6 rotate-3'
                        } w-28 aspect-[4/3] rounded-lg overflow-hidden border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:scale-105 hover:rotate-0 transition-transform duration-300 bg-white`}
                      >
                        <img
                          src={moment.images[1]}
                          alt={`${moment.title} certificate`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3">
                      {moment.date}
                    </p>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 mb-3">
                      {moment.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
