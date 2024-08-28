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

export function ConstetantCard({name, tagline, position, imagesrc}: ContestantData) {
  return (
    <Card className="w-[300px]" data-position={position}>
      
      <CardContent className="w-full px-4 pt-4">
        <Image src={imagesrc} alt={name} width={300} height={300} className="rounded-lg" />
      </CardContent>
      <CardHeader className="p-4 pt-0">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{tagline}</CardDescription>
        <Button variant="outline" className="!mt-4">Vote</Button>
      </CardHeader>
    </Card>
  )
}
