"use client"
import { useState, useEffect } from "react"
import { roles } from "@/data/roles"
import { contestants } from "@/data/contestants"
import { VoteLayout } from "@/components/shared/vote_layout"
import { ConstetantCard } from "@/components/shared/contestant_card"
import { useVoterStore } from "@/store/voter"
import { formatRoleStr } from "@/lib/utils"
import toast from "react-hot-toast"

interface ElectionData {
  position: string[] // Assuming roles are an array of strings
  contestants: any[] // Replace 'any' with a more specific type if available
}


export function CastVote() {
  const { vote, contestants_voted, fetchElectionData } = useVoterStore()
  const [election, setElection] = useState<ElectionData | null>(null)
  const [selectedContestants, setSelectedContestants] = useState<{ [key: string]: string }>(contestants_voted);
  const [success, setSucess] = useState(true)

  useEffect(() => {
    const getElectionData = async () => {
      const data = await fetchElectionData()
      setElection(data as ElectionData)
    }
    getElectionData()
  }, [fetchElectionData])

  async function handleVote(id: string, position: string, name: string) {
    if (confirm(`Are you sure you want to vote ${name} for ${position}?`) == true) {
      const toastId = toast.loading(`voting ${name}`, { duration: 4000 })
      setSelectedContestants((prev) => ({ ...prev, [position]: id, }));
      const { status, message } = await vote({ [position]: id })
      status == 'success' ? setSucess(true) : setSucess(false)
      toast[status](`${message}`, {
          id: toastId,
      });
    } else {
      return;
    }
  }

  function handleSave(role: string) {
    const formattedRole = formatRoleStr(role)
    if(selectedContestants[role] !== '' && selectedContestants[role] !== undefined) {
        const toastId = toast.loading(`saving ${formattedRole}`, { duration: 4000 })
        toast.success(`saved ${formattedRole}`, {
            id: toastId,
        });
    } else {
        toast.error(`please choose a ${formattedRole}`)
    }
  }

  return election ? (
    <VoteLayout roles={election.position} contestants={election.contestants} handleSave={handleSave} showbutton={false} showMessage={true}>
      {(contestant) => {
        const isDisabled = !!contestants_voted[contestant.position]; // Disable if someone is already voted for this position
        const isVotedFor = contestants_voted[contestant.position] === contestant.id && success; // Check if this contestant is voted for

        return (
          <ConstetantCard key={contestant.id} id={contestant.id} name={contestant.name} imagesrc={contestant.image} tagline={contestant.tagline} position={contestant.position}  isDisabled={isDisabled || isVotedFor}
          onVote={() => handleVote(contestant.id, contestant.position, contestant.name)} />
        )
      }}
    </VoteLayout>
  ): <div>Loading...</div>
}