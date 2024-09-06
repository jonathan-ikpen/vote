"use client"
import { useState, useEffect } from "react"
import { roles } from "@/data/roles"
import { contestants } from "@/data/contestants"
import { VoteLayout } from "@/components/shared/vote_layout"
import { ConstetantCard } from "@/components/shared/contestant_card"
import { useVoterStore } from "@/store/voter"


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

  return (
    <VoteLayout roles={roles} contestants={contestants}>
      {(contestant) => (
        <ConstetantCard key={contestant.id} id={contestant.id} name={contestant.name} imagesrc={`${imagePath}${contestant.image}.jpg`} tagline={contestant.tagline} position={contestant.position}  isDisabled={selectedContestants[contestant.position] === contestant.name}
        onVote={() => handleVote(contestant.name, contestant.position)} />
      )}
    </VoteLayout>
  )
}