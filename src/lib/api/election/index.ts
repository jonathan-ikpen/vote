"use server"

import { apiInstance } from "@/lib/axios"

export const getElectionData = () => {
    const res = apiInstance.get('/election/').then(async (response) => {
        console.log("back success: \t", await response.data)
        return {data: await response.data, success: true }

    }).catch(async (error) => {
        console.log("back error: \t", await error.response?.data);
        return {error: await error.response?.data, success: false }
    })

    return res;
}