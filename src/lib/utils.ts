import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFileUrl(name: string) {
  return `https://pub-b25b471162164a6491631a0a49b63e77.r2.dev/${encodeURIComponent(name)}`;
}