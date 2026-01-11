"use client";

import { Bell, ChevronDown, PanelLeftIcon, Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import ThemeSwitch from "@/components/layout/header/theme-switch";

export function SeoHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-background/40 sticky top-0 z-50 flex h-(--header-height) shrink-0 items-center gap-2 border-b backdrop-blur-md transition-[width,height] ease-linear md:rounded-tl-xl md:rounded-tr-xl">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2">
        <Button onClick={toggleSidebar} size="icon" variant="ghost">
          <PanelLeftIcon />
        </Button>
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />

        {/* Search */}
        <div className="relative w-full max-w-sm">
          <Input
            placeholder="Text Here"
            className="pl-3 pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        </div>

        {/* Navigation Links */}
        <nav className="ml-8 hidden items-center gap-6 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/80">
              Resources <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Guides</DropdownMenuItem>
              <DropdownMenuItem>Blog</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/80">
              Company <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Careers</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/80">
              App Center <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Integrations</DropdownMenuItem>
              <DropdownMenuItem>Extensions</DropdownMenuItem>
              <DropdownMenuItem>API</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="#" className="text-sm font-medium text-foreground hover:text-foreground/80">
            Enterprise
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button className="bg-violet-600 hover:bg-violet-700 text-white">
            Upgrade
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-5" />
          </Button>

          <ThemeSwitch />

          <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />

          <Avatar className="size-9">
            <AvatarImage src="/avatars/01.png" alt="User" />
            <AvatarFallback className="bg-violet-100 text-violet-600">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
