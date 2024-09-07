import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { ContestantData } from "@/types/contestant"
import { useVoterStore } from "@/store/voter"

export function ConstetantCard({id, name, tagline, position, imagesrc, isDisabled, onVote }: ContestantData) {
  return (
    <Card key={id} className="w-[300px]" data-position={position}>
      <CardContent className="w-full px-4 pt-4">
        <Image src={imagesrc} alt={name} width={300} height={300} className="rounded-lg" />
      </CardContent>
      <CardHeader className="p-4 pt-0">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{tagline}</CardDescription>
        <Button variant="outline" className="!mt-4" disabled={isDisabled} onClick={onVote}>{isDisabled ? "Voted" : "Vote"}</Button>
      </CardHeader>
    </Card>
  )
}
