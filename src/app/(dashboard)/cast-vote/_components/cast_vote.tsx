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
  const { vote, contestants_voted } = useVoterStore()
  const [selectedContestants, setSelectedContestants] = useState<{ [key: string]: string }>({});
  const imagePath = "/images/"

  useEffect(() => {
      console.log("Updated contestants_voted:", contestants_voted);
    }, [contestants_voted]);

  function handleVote(name: string, position: string) {
    setSelectedContestants((prev) => ({ ...prev, [position]: name, }));
    vote({ [position]: name })
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

  return (
    <VoteLayout roles={roles} contestants={contestants} handleSave={handleSave}>
      {(contestant) => (
        <ConstetantCard key={contestant.id} id={contestant.id} name={contestant.name} imagesrc={`${imagePath}${contestant.image}.jpg`} tagline={contestant.tagline} position={contestant.position}  isDisabled={selectedContestants[contestant.position] === contestant.name}
        onVote={() => handleVote(contestant.name, contestant.position)} />
      )}
    </VoteLayout>
  )
}