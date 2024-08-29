import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function filterRolesObj(arr: { [key: string]: any }[], position: string) {
  return arr.filter((item) => item.position.toLowerCase().trim() === position.toLowerCase().trim());
}


export function filterRolesStr(arr: string[], query: string) {
  return arr.filter((el) => el.toLowerCase().trim() === query.toLowerCase().trim()).map((item) => item.split(' ').splice(1).join("_"));
}

export function formatRoleStr(str: string) {
  return str.split("_").join(" ");
}