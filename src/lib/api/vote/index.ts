"use server"

import { apiInstance } from "@/lib/axios"
import { User } from "@/types/voter"

export const voteContestant = (voterId: string, body: {[key: string]: string}) => {
    console.log(body)
    const res = apiInstance.patch(`/vote/${voterId}/vote/`, {
        "voted": body
      }).then(async (response) => {
        console.log("update success: \t", await response.data)
        return {data: await response.data, success: true }

    }).catch(async (error) => {
        console.log("update error: \t", await error.response?.data);
        return {error: await error.response?.data, success: false }
    })

    return res;
}