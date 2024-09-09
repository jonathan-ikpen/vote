import { roles } from "@/data/roles"
import { contestants } from "@/data/contestants"
import { VoteLayout } from "@/components/shared/vote_layout"
import { Chart } from "./chart"


export function ResultsContent() {

  return (
    <VoteLayout roles={roles} contestants={contestants} showbutton={false} data={(contestants) => <Chart contestants={contestants} />} />
  )
}