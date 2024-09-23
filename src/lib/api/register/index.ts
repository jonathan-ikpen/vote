"use server"

import { apiInstance } from "@/lib/axios";
import { RegisterApiType } from "@/types/register";

export const registerVoter = (user: RegisterApiType) => {

    const res = apiInstance.post(`/register/`, {
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        matricnum: user.matricnum,
        department: user.department,
        country: "Nigeria",
        date_of_birth: "1990-01-01",
        gender: user.gender,

    })
    .then(async (response) => {
        console.log("back success: \t", await response.data)
        return {data: await response.data, success: true }

    })
    .catch(async (error) => {
        console.log("back error: \t", await error.response.data);
        return {error: await error.response.data, success: false } 
    })

    return res;

}