import { StaticImageData } from "next/image"

export interface ContestantData {
    id: string
    name: string 
    tagline: string
    position: string 
    // imagesrc: StaticImageData
    imagesrc: string
    isDisabled: boolean;
    onVote: () => void;
}