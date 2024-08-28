import { ChangeEvent } from "react"

export interface RegistrationData {
    firstname: string
    lastname: string
    matricnum: string
    phone: number
    dob: Date
    gender: string
    email: string
    department: string
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
