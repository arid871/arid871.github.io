import { X, Download } from 'lucide-react';
import { useEffect, useCallback } from 'react';
import { PERSONAL } from '../../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(encodeURI(PERSONAL.resume));
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = url;
      link.setAttribute('download', 'MD_Mustakim_Arid_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 200);
    } catch {
      window.open(encodeURI(PERSONAL.resume), '_blank');
    }
  }, []);

  if (!isOpen) return null;

  const encodedResume = encodeURI(PERSONAL.resume);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full h-full max-w-5xl max-h-[92vh] mx-4 my-4 md:mx-8 md:my-8 bg-white rounded-xl flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-neutral-100">
          <span className="text-sm font-medium text-neutral-800 tracking-wide font-heading">Resume</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors tracking-wide"
            >
              <Download size={14} strokeWidth={1.5} />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="Close"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-b-xl">
          <iframe
            src={`${encodedResume}#toolbar=0&navpanes=0`}
            title="Resume"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
