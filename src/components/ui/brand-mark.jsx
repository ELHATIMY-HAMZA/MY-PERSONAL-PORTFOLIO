import { cn } from '../../lib/utils';

/**
 * BrandMark — the "HE" monogram.
 *
 * H and E share one stem, drawn in the soft indigo accent on a dark tile,
 * with a green "online" dot echoing the availability indicators used across
 * the site. Inline SVG rather than an image: no request, crisp at any size,
 * and the same geometry as public/favicon.svg (keep the two in sync — the
 * PNG/ICO icons are rendered from that file).
 *
 * The tile stays dark in light mode on purpose: a logo should look the same
 * everywhere, and the dark tile reads well on the light page.
 *
 * Decorative by design: every call site already labels its own link, so the
 * image is hidden from assistive tech instead of repeating the name.
 */
export default function BrandMark({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={cn('shrink-0 select-none', className)}
      {...props}
    >
      <rect width="64" height="64" rx="16" fill="#0A0C10" />
      <rect x="1" y="1" width="62" height="62" rx="15" fill="none" stroke="#262B36" strokeWidth="2" />
      <path
        d="M17 18v28M17 32h15M32 18v28M32 18h15M32 32h11M32 46h15"
        fill="none"
        stroke="#A5A0FF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="53" cy="11" r="4" fill="#34D399" />
    </svg>
  );
}
