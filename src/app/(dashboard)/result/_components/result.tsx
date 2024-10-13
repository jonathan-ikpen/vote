"use client"
import { VoteLayout } from "@/components/shared/vote_layout"
import { Chart } from "./chart"
import { useVoterStore } from "@/store/voter"
import { useEffect, useState } from "react"

// Define the structure of the election data
interface ElectionData {
  position: string[] // Assuming roles are an array of strings
  contestants: any[] // Replace 'any' with a more specific type if available
}

export function ResultsContent() {
  const { fetchElectionData } = useVoterStore()
  const [election, setElection] = useState<ElectionData | null>(null)

  useEffect(() => {
    const getElectionData = async () => {
      const data = await fetchElectionData()
      setElection(data as ElectionData)
    }
    getElectionData()
  }, [fetchElectionData])

  return election ? (
    <VoteLayout 
      roles={election.position} 
      contestants={election.contestants} 
      showbutton={false} 
      data={(contestants) => <Chart contestants={contestants} />} 
    />
  ) : <div>Loading...</div>
}