"use client"
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
import { filterRolesObj, filterRolesStr } from "@/lib/utils"

export function RoleTabs() {
    const presidents = filterRolesObj(contestants, "president");
    const imagePath = "/images/"

  return (
    <Tabs defaultValue="president">
        <div className="grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <TabsList className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
                {roles.map((role) => (
                    <TabsTrigger className="text-left" value={role} key={role}>
                        <Link href={`#${role}`} className="font-semibold text-primary">{role}</Link>   
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className="grid gap-6">
                {roles.map((role) => (
                    <TabsContent value={role} key={role}>
                        <Card x-chunk="dashboard-04-chunk-1">
                            <CardHeader>
                                <CardTitle>{role}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex gap-8">
                                {filterRolesObj(contestants, role).map((president) => (
                                    <ConstetantCard key={president.id} name={president.name} imagesrc={`${imagePath}${president.image}.jpg`} tagline={president.tagline} position={president.position} />
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
