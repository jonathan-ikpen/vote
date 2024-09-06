import { RoleTabs } from "./vote_roles"
import { TabLayout } from "@/components/shared/tab_layout"
import { roles } from "@/data/roles"
import { ContestantRoleContent } from "./contestants"
import { contestants } from "@/data/contestants"

export function CastVote() {
  return (
        <TabLayout roles={roles} >
            <ContestantRoleContent roles={roles} contestants={contestants}/>
        </TabLayout>
  )
}