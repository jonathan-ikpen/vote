"use client"

import { useVoterStore } from "@/store/voter"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

import {
    Cloud,
    CreditCard,
    LogOut,
    Settings,
    User,
    CircleHelp
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  export default function AvatarDropDown() {
    const { voterId, logout } = useVoterStore();

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
            {/* <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem> */}
            <DropdownMenuItem>
              <CircleHelp className="mr-2 h-4 w-4" />
              <span>Help</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem onClick={() => logout()}>
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
  



export function Avatar2() {

    return (
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 w-8 shrink-0 rounded-full border" id="menu-trigger-button" type="button" aria-haspopup="menu" aria-expanded="false" data-state="closed">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 9h16.5m-16.5 6.75h16.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span className="sr-only">Toggle Menu</span>
        </button>
    )
}



