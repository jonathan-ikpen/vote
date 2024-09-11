import { CandidateVotes } from "@/types/contestant";
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



export function getLeadingCandidateWithPercentageDifference(candidates: CandidateVotes[]): string {
  if (candidates.length < 2) {
      return "";
  }
  const sortedCandidates = candidates.sort((a, b) => b.votes - a.votes);

  const leadingCandidate = sortedCandidates[0];
  const secondCandidate = sortedCandidates[1];

  const percentIncrease = ((leadingCandidate.votes - secondCandidate.votes) / secondCandidate.votes) * 100;

  return `${leadingCandidate.name} is leading by ${percentIncrease.toFixed(2)}%.`;
}
