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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { roles } from "@/data/roles"

export function RoleTabs() {
  return (
    <Tabs defaultValue="SUG president">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
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
                                <CardDescription>
                                Used to identify your store in the marketplace.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                <Input placeholder="Store Name" />
                                </form>
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
