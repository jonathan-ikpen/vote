import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import Link from "next/link"
  import { formatRoleStr } from "@/lib/utils"


export function TabLayout({children, roles}: {children: React.ReactNode, roles: string[]}) {
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
                {children}
            </div>
      </div>
    </Tabs>
    )
}