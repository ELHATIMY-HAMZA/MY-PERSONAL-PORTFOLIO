import { useEffect, useRef, useState } from 'react';
import { Download, Eye, ExternalLink, X } from 'lucide-react';
import { useContent } from '../../i18n';
import { cn } from '../../lib/utils';

/**
 * CV actions — "Preview" opens the CV in a dialog, "Download" saves the PDF.
 * Sits in the hero, under the main actions, so recruiters find it first.
 * Green (the site's "signal" colour) sets it apart from the indigo
 * WhatsApp button: the solid download is the action, the outlined preview
 * the secondary one.
 *
 * The preview shows a rendered image of the page rather than embedding the
 * PDF: mobile browsers don't display PDFs inside an iframe (iOS shows only
 * a static first page, Android shows nothing), while an image works
 * everywhere. "Open PDF" is there for anyone who wants the real document.
 */
export default function CvLink({ className }) {
  const { profile, ui } = useContent();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const baseClass =
    'group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5';

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          baseClass,
          'border border-signal-500/45 bg-signal-500/10 text-signal-400 hover:border-signal-400 hover:bg-signal-500/18'
        )}
      >
        <Eye className="size-3.5" />
        {ui.previewCv}
      </button>
      <a
        href={profile.cv}
        download="CV_Hamza_Elhatimy.pdf"
        className={cn(
          baseClass,
          'bg-signal-400 text-ink-950 shadow-lg shadow-signal-500/20 hover:bg-signal-500 hover:shadow-signal-500/30'
        )}
      >
        <Download className="size-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
        {ui.downloadCv}
        <span className="font-mono text-[10px] font-normal opacity-70">{ui.downloadCvNote}</span>
      </a>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === dialogRef.current && setOpen(false)}
        aria-label={ui.previewCv}
        className="m-auto h-[min(92dvh,1100px)] w-[min(94vw,820px)] max-w-none overflow-hidden rounded-panel border border-fg/10 bg-ink-900 p-0 text-ink-100 shadow-2xl shadow-black/60 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-fg/8 px-4 py-3">
              <p className="truncate text-sm font-semibold text-ink-50">{ui.previewCv}</p>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-1.5 rounded-full border border-fg/10 px-3 py-1.5 text-xs font-medium text-ink-200 transition-colors hover:text-ink-50 sm:inline-flex"
                >
                  <ExternalLink className="size-3.5" />
                  {ui.openPdf}
                </a>
                <a
                  href={profile.cv}
                  download="CV_Hamza_Elhatimy.pdf"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-500"
                >
                  <Download className="size-3.5" />
                  {ui.downloadCv}
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={ui.close}
                  className="grid size-8 place-items-center rounded-full border border-fg/10 text-ink-200 transition-colors hover:text-ink-50"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
            {/* data-lenis-prevent: let the wheel scroll this panel, not the page. */}
            <div data-lenis-prevent className="flex-1 overflow-y-auto overscroll-contain bg-ink-950 p-3 sm:p-5">
              <img
                src={profile.cvPreview.src}
                width={profile.cvPreview.width}
                height={profile.cvPreview.height}
                alt={ui.cvPreviewAlt}
                className="mx-auto block h-auto w-full max-w-[760px] rounded-md shadow-xl shadow-black/40"
              />
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
