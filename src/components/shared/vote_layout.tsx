import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { filterRolesObj, formatRoleStr } from "@/lib/utils"
import { ContestantTypes } from "@/types/contestant"

export function VoteLayout({ roles, contestants, children }: {roles: string[], contestants: ContestantTypes[], children: (contestant: any) => React.ReactNode }) {

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
                                {filterRolesObj(contestants, role).map((contestant) => children(contestant))}
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


