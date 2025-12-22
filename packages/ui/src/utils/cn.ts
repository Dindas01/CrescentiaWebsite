import clsx, { ClassValue } from 'clsx'

/**
 * Utility function to merge class names
 * Uses clsx for conditional class composition
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
