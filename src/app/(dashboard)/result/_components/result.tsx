import { roles } from "@/data/roles"
import { contestants } from "@/data/contestants"
import { VoteLayout } from "@/components/shared/vote_layout"


export function ResultsContent() {

  return (
    <VoteLayout roles={roles} contestants={contestants} showbutton={false}>
      {(contestant) => (
        <div key={contestant.id}></div>
      )}
    </VoteLayout>
  )
}