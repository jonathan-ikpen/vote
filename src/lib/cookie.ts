"use server"
import { cookies } from "next/headers"


export async function getCookie() {
    const cookieStore = cookies()
    return cookieStore.get('authToken')
}

export async function checkAuthCookie() {
    return cookies().has('authToken')
}

export async function setCookie(voterId: string) {
    const cookieStore = cookies()

    cookieStore.set('authToken', voterId, { expires: 7 });
    console.log(cookieStore.get('authToken')?.value)
}

export async function deleteCookie(name: string) {
    const cookieStore = cookies()

    cookieStore.delete(name);
}