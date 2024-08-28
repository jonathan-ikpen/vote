import { RoleTabs } from "./vote_roles"

export function CastVote() {
  return (
      <div className="flex fmin-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8">
        <RoleTabs/>
      </div>
  )
}
