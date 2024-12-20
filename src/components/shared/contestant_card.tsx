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
import { Badge } from "@/components/ui/badge"

export function ConstetantCard({id, name, tagline, position, imagesrc, isDisabled, onVote }: ContestantData) {
  return (
    <Card key={id} className="w-[300px]" data-position={position}>
      <CardContent className="w-full px-4 pt-4">
        <Image src={imagesrc} alt={name} width={300} height={300} className="rounded-lg" />
      </CardContent>
      <CardHeader className="p-4 pt-0">
        <CardTitle>{name}</CardTitle>
        <div className="flex justify-between ">
          <CardDescription>{tagline}</CardDescription>
          <Badge variant="outline" className="!text-[10px]">{id}</Badge>
        </div>
        <Button className={`!mt-4 ${isDisabled ? "bg-red-600" : "bg-green-600 hover:bg-green-800"}`} disabled={isDisabled} onClick={onVote}>{isDisabled ? "Voted" : "Vote"}</Button>
      </CardHeader>
    </Card>
  )
}
