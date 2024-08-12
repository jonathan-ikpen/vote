import { RoleTabs } from "./vote_roles"

export function CastVote() {
  return (
      <div className="flex pt-10 fmin-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Cast Your Votes</h1>
        </div>
        <RoleTabs/>
      </div>
  )
}
