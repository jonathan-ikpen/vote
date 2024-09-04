"use server"
import { cookies } from "next/headers"


export async function getCookie() {
    return cookies().get('authToken')
}

export async function checkAuthCookie() {
    return cookies().has('authToken')
}

export async function setCookie(voterId: string) {
    cookies().set('authToken', voterId);
}

export async function deleteCookie() {
    cookies().delete('authToken');
}