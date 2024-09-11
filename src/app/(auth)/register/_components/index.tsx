"use client"
import { RegisterForm } from "./register_form"
import { useState } from "react"
import SuccessRedirect from "./success_redirect"

export default function Register() {
    const [success, setSuccess] = useState(false)
    const [name, setName] = useState("")

    function handleSuccess(s: boolean, n: string) {
        setSuccess(s)
        setName(n)
    }

    return (
        <>
            {!success && <RegisterForm onSuccess={handleSuccess}/>}
            {success && <SuccessRedirect name={name} />}
        </>
    )
}