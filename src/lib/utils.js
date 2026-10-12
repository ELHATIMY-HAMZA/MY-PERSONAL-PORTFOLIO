import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Conditional className merge. Required by Magic UI / Aceternity UI
 * component patterns and used throughout this project.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** wa.me link with a prefilled message. `number` is digits only. */
export function whatsappUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
