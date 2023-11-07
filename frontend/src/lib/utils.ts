import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function deslugify(slug: string) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export async function simpleFetch(url: string) {
  return fetch(url)
    .then((res) => res.json())
    .catch(() => {
      console.log(`Error fetching ${url}`);
    });
}
