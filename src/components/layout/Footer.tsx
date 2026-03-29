import { PERSONAL } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-[10px] tracking-widest text-neutral-300">
          &copy; {new Date().getFullYear()} {PERSONAL.name}
        </p>
      </div>
    </footer>
  );
}
