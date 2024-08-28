import { StaticImageData } from "next/image"

export interface ContestantData {
    name: string 
    tagline: string
    position: string 
    // imagesrc: StaticImageData
    imagesrc: string
}