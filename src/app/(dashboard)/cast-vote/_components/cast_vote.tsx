"use client"
import { useState, useEffect } from "react"
import { roles } from "@/data/roles"
import { contestants } from "@/data/contestants"
import { VoteLayout } from "@/components/shared/vote_layout"
import { ConstetantCard } from "@/components/shared/contestant_card"
import { useVoterStore } from "@/store/voter"
import { formatRoleStr } from "@/lib/utils"
import toast from "react-hot-toast"


export function CastVote() {
  const { vote, contestants_voted, user, election } = useVoterStore()
  const [selectedContestants, setSelectedContestants] = useState<{ [key: string]: string }>(contestants_voted);
  const [success, setSucess] = useState(true)
  const imagePath = "/images/"

  async function handleVote(id: string, position: string, name: string) {
    const toastId = toast.loading(`voting ${name}`, { duration: 4000 })
    setSelectedContestants((prev) => ({ ...prev, [position]: id, }));
    const { status, message } = await vote({ [position]: id })
    status == 'success' ? setSucess(true) : setSucess(false)
    toast[status](`${message}`, {
        id: toastId,
    });
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

  // useEffect(() => {
  //   console.log("Updated contestants_voted:", contestants_voted);
  // }, [contestants_voted]);

  return election && (
    <VoteLayout roles={election.position} contestants={election.contestants} handleSave={handleSave} showbutton={false}>
      {(contestant) => {
        const isDisabled = !!contestants_voted[contestant.position]; // Disable if someone is already voted for this position
        const isVotedFor = contestants_voted[contestant.position] === contestant.id && success; // Check if this contestant is voted for

        return (
          <ConstetantCard key={contestant.id} id={contestant.id} name={contestant.name} imagesrc={contestant.image} tagline={contestant.tagline} position={contestant.position}  isDisabled={isDisabled || isVotedFor}
          onVote={() => handleVote(contestant.id, contestant.position, contestant.name)} />
        )
      }}
    </VoteLayout>
  )
}