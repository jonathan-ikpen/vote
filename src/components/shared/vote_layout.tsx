import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { filterRolesObj, formatRoleStr } from "@/lib/utils"
import { ContestantTypes } from "@/types/contestant"
import { VoteLayoutTypes } from "@/types/layout"

export function VoteLayout({ roles, contestants, children, data, showbutton = true, handleSave, showMessage = false }: VoteLayoutTypes) {

  return (
    <Tabs defaultValue="president">
        <div className="grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <TabsList className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
                {roles.map((role) => (
                    <TabsTrigger className=" text-left" value={role.name} key={role.name}>
                        <Link href={`#${role.name}`} className="font-semibold text-primary">{formatRoleStr(role.name)}</Link>   
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className="grid gap-6">
                {roles.map((role) => (
                    <TabsContent value={role.name} key={role.name}>
                        <Card x-chunk="dashboard-04-chunk-1">
                            <CardHeader>
                                <CardTitle>{formatRoleStr(role.name)}</CardTitle>
                                {showMessage && <CardDescription>please note: you can only vote once</CardDescription>}
                            </CardHeader>
                            {children && <CardContent className="flex gap-8 flex-wrap">
                                {filterRolesObj(contestants, role.name).map((contestant) => children(contestant))}
                            </CardContent>}
                            {data && <CardContent className="flex gap-8 flex-wrap justify-center items-center">
                                {data(filterRolesObj(contestants, role.name))}
                            </CardContent>}
                            {showbutton && (<CardFooter className="border-t px-6 py-4">
                                <Button onClick={() => handleSave && handleSave(role.name)}>Save</Button>
                            </CardFooter>)}
                        </Card>
                    </TabsContent>
                ))}
            </div>
      </div>
    </Tabs>
  )
}


