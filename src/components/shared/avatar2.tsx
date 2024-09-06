"use client"
import { useVoterStore } from "@/store/voter"
import { useRouter, usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Cloud, CreditCard, LogOut, Settings, User, UserCheck, CircleHelp, ChartNoAxesCombined } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import Link from "next/link"
  
export default function AvatarDropDown() {
    const router = useRouter()
    const pathname = usePathname()
    const { voterId, logout } = useVoterStore();

    const castVotePage = pathname == "/cast-vote";
    const liveResultPage = pathname == "/result";

    function handleLogout () {
      logout()
      router.push('/')
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 w-8 shrink-0 rounded-full border">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 9h16.5m-16.5 6.75h16.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52 mt-2 mr-4">
          <DropdownMenuLabel>{voterId ?? "My Account"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={'https://wa.me/2348127964509'} target="blank">
                <CircleHelp className="mr-2 h-4 w-4" />
                <span>Help</span>
              </Link>
            </DropdownMenuItem>
           {castVotePage && 
              (
                <DropdownMenuItem asChild>
                    <Link href={'/result'}>
                      <ChartNoAxesCombined className="mr-2 h-4 w-4" />
                      <span>Live Result</span>
                    </Link>
                </DropdownMenuItem>
              )
            }
           {liveResultPage && 
              (
                <DropdownMenuItem asChild>
                  <Link href={'/cast-vote'}>
                    <UserCheck className="mr-2 h-4 w-4" />
                    <span>Vote</span>
                  </Link>
                </DropdownMenuItem>
              )
            }
          </DropdownMenuGroup>
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}


export function AvatarButton() {
    return (
      <Avatar>
        <AvatarImage src="https://vercel.com/api/www/avatar/Lytnk9fQ9p2OelJ7fQpElbUI?s=64" alt="@profile" />
        <AvatarFallback>PV</AvatarFallback>
      </Avatar>
    )
}
  



