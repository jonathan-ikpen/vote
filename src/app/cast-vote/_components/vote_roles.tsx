"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { roles } from "@/data/roles"
import { ConstetantCard } from "@/components/shared/contestant_card"
import Image from "../../../../public/images/girl1.jpg"
import { contestants } from "@/data/contestants"
import { filterRolesObj, filterRolesStr, formatRoleStr } from "@/lib/utils"
import { useVoterStore } from "@/store/voter"

export function RoleTabs() {
    const { vote, contestants_voted } = useVoterStore()
    const [selectedContestants, setSelectedContestants] = useState<{ [key: string]: string }>({});
    const presidents = filterRolesObj(contestants, "president");
    const imagePath = "/images/"

    useEffect(() => {
        // This will log the correct contestants_voted after each update
        console.log("Updated contestants_voted:", contestants_voted);
      }, [contestants_voted]);

    function handleVote(name: string, position: string) {
        setSelectedContestants((prev) => ({
            ...prev,
            [position]: name, // Update only the contestant for the specific position
          }));
        vote({ [position]: name })
    }

  return (
    <Tabs defaultValue="president">
        <div className="grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <TabsList className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
                {roles.map((role) => (
                    <TabsTrigger className="text-left" value={role} key={role}>
                        <Link href={`#${role}`} className="font-semibold text-primary">{formatRoleStr(role)}</Link>   
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className="grid gap-6">
                {roles.map((role) => (
                    <TabsContent value={role} key={role}>
                        <Card x-chunk="dashboard-04-chunk-1">
                            <CardHeader>
                                <CardTitle>{formatRoleStr(role)}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex gap-8 flex-wrap">
                                {filterRolesObj(contestants, role).map((contestant) => (
                                    <ConstetantCard key={contestant.id} id={contestant.id} name={contestant.name} imagesrc={`${imagePath}${contestant.image}.jpg`} tagline={contestant.tagline} position={contestant.position}  isDisabled={selectedContestants[contestant.position] === contestant.name}
                                    onVote={() => handleVote(contestant.name, contestant.position)} />
                                ))}
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4">
                                <Button>Save</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                ))}
            </div>
      </div>
    </Tabs>
  )
}
