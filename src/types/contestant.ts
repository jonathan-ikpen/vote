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

// { name: 'Adebayo Oluwaseun', image: 'boy1', position: 'president', tagline: '', id: 0 }

export interface ContestantTypes {
    id: number
    name: string
    image: string
    position: string
    tagline: string
}