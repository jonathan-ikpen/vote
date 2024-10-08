"use client"
import { roles } from "@/data/roles"
import { contestants } from "@/data/contestants"
import { VoteLayout } from "@/components/shared/vote_layout"
import { Chart } from "./chart"
import { useVoterStore } from "@/store/voter"


export function ResultsContent() {
  const { election } = useVoterStore()

  return (
    <VoteLayout roles={election.position} contestants={election.contestants} showbutton={false} data={(contestants) => <Chart contestants={contestants} />} />
  )
}