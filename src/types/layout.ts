import { ContestantTypes } from "./contestant"

export interface VoteLayoutTypes {
    roles: any[] 
    contestants: ContestantTypes[] 
    children?: (contestant: any) => React.ReactNode
    data?: (contestants: any) => React.ReactElement
    showbutton?: boolean
    handleSave?: (role: string) => void
}