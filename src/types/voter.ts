import { RegisterApiType } from "./register"

export interface User {
    voterId: string | null
}

export interface ContestantsVoted {
    president: string
    vice_president: string
    sec_general: string
    sport_director: string
    financial_secretary: string
    financial_secretary_assistant: string
    social_director: string
    welfarer: string
    welfarer_assistant: string
}

export interface LoggedUser {
    user: RegisterApiType | null,
    voterId: string | null,
    isAuthenticated: boolean
    loading: boolean,
    error: string | null,
}

export interface StateStorage {
    getItem: (name: string) => Promise<string | null>
    setItem: (name: string, value: string) => Promise<void>
    removeItem: (name: string) => Promise<void>
}



export interface VoterState {
    voterId: string
    user: RegisterApiType | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
    contestants_voted: { [key: string]: string }
    election: any
    hours: string,
    login: (voterId: string) => Promise<LoggedUser>
    logout: () => Promise<void>
    fetchElectionData: () => any
    vote: (contestantId: Partial<ContestantsVoted>) => Promise<{ status: 'success' | 'error', message: string}>
    unvote: (position: Partial<ContestantsVoted>) => void
    reset: () => void
}