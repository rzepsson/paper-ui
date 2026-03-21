import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const focusRingClass =
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const closeButtonClass = 
    "flex items-center justify-center rounded-md text-current opacity-70 transition-all duration-200 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 active:scale-[0.92] disabled:pointer-events-none";