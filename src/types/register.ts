import { ChangeEvent } from "react"

export interface RegistrationData {
    firstname: string
    lastname: string
    matricnum: string
    phone: number
    dob?: Date
    gender: string
    email: string
    department: string
}

export interface RegisterApiType {
    first_name: string
    last_name: string
    phone: string
    email: string
    matricnum: string
    department: string
    country?: string
    date_of_birth?: string
    gender: string
}
  
export interface RegistrationState {
    step: number
    data: RegistrationData
    nextStep: () => void
    prevStep: () => void
    setData: (newData: Partial<RegistrationData>) => void
    reset: () => void
}

export interface StepTypes {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    data: RegistrationData
}
