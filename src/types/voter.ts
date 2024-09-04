
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
    user: User | null,
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
    voterId: string | null
    user: User | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
    contestants_voted: ContestantsVoted
    login: (voterId: string) => Promise<LoggedUser>
    logout: () => Promise<void>
    vote: (contestantId: Partial<ContestantsVoted>) => void
    unvote: (position: Partial<ContestantsVoted>) => void
    reset: () => void
}