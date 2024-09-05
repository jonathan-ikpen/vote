"use client"
import { useState, useEffect } from "react";
import { formatRoleStr, filterRolesObj, filterRolesStr } from "@/lib/utils";
import { ContestantTypes } from "@/types/contestant";
import { useVoterStore } from "@/store/voter";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { ConstetantCard } from "@/components/shared/contestant_card";


export function ContestantRoleContent({ roles, contestants}: {roles: string[], contestants: ContestantTypes[] }) {
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

    function handleSave(role: string) {
        const formattedRole = formatRoleStr(role)
        console.log(selectedContestants)
        if(selectedContestants[role] !== '' && selectedContestants[role] !== undefined) {
            const toastId = toast.loading(`saving ${formattedRole}`, { duration: 4000 })
            toast.success(`saved ${formattedRole}`, {
                id: toastId,
            });
        } else {
            toast.error(`please choose a ${formattedRole}`)
        }
    }

    return (
        <>
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
                        <Button onClick={() => handleSave(role)}>Save</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        ))}
        </>
    )
}