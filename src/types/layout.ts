import { ContestantTypes } from "./contestant"

export interface VoteLayoutTypes {
    roles: string[] 
    contestants: ContestantTypes[] 
    children?: (contestant: any) => React.ReactNode
    data?: (contestants: any) => React.ReactElement
    showbutton?: boolean
    handleSave?: (role: string) => void
}