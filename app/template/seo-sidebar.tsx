"use client";

import * as React from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BarChart3,
  Globe,
  LineChart,
  Search,
  TrendingUp,
  Link2,
  FileSearch,
  ScanSearch,
  FileText,
  Settings,
  HelpCircle,
  type LucideIcon
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsTablet } from "@/hooks/use-mobile";

type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  isActive?: boolean;
};

const seoToolsItems: NavItem[] = [
  { title: "SEO Dashboard", href: "/template", icon: BarChart3, isActive: true },
  { title: "Domain Overview", href: "/template/domain", icon: Globe },
  { title: "Traffic Analytics", href: "/template/traffic", icon: LineChart },
  { title: "Organic Research", href: "/template/organic", icon: Search },
  { title: "Keyword Explorer", href: "/template/keywords", icon: TrendingUp },
  { title: "Competitive Analysis", href: "/template/competitive", icon: BarChart3 }
];

const siteToolsItems: NavItem[] = [
  { title: "Backlink Checker", href: "/template/backlinks", icon: Link2 },
  { title: "Link Opportunities", href: "/template/opportunities", icon: FileSearch },
  { title: "Site Audit", href: "/template/audit", icon: ScanSearch },
  { title: "Content Analyzer", href: "/template/analyzer", icon: FileText }
];

const footerItems: NavItem[] = [
  { title: "Support", href: "/template/support", icon: HelpCircle },
  { title: "Settings", href: "/template/settings", icon: Settings }
];

export function SeoSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { setOpen, setOpenMobile, isMobile } = useSidebar();
  const isTablet = useIsTablet();

  useEffect(() => {
    if (isMobile) setOpenMobile(false);
  }, [pathname, isMobile, setOpenMobile]);

  useEffect(() => {
    setOpen(!isTablet);
  }, [isTablet, setOpen]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-10 group-data-[collapsible=icon]:px-0!" asChild>
              <Link href="/template" className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-violet-600">
                  <BarChart3 className="size-4 text-white" />
                </div>
                <span className="text-foreground font-semibold text-lg">AnalysePro</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarGroup>
            <SidebarGroupLabel className="text-violet-600 font-semibold">SEO Tools</SidebarGroupLabel>
            <SidebarGroupContent className="flex flex-col gap-0.5">
              <SidebarMenu>
                {seoToolsItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={`hover:text-foreground hover:bg-violet-100 dark:hover:bg-violet-900/30 ${
                        pathname === item.href
                          ? "bg-violet-600 text-white hover:bg-violet-600 hover:text-white"
                          : ""
                      }`}
                      tooltip={item.title}
                      asChild
                    >
                      <Link href={item.href}>
                        <item.icon className={pathname === item.href ? "text-white" : ""} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-violet-600 font-semibold">Site & Content Tools</SidebarGroupLabel>
            <SidebarGroupContent className="flex flex-col gap-0.5">
              <SidebarMenu>
                {siteToolsItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={`hover:text-foreground hover:bg-violet-100 dark:hover:bg-violet-900/30 ${
                        pathname === item.href
                          ? "bg-violet-600 text-white hover:bg-violet-600 hover:text-white"
                          : ""
                      }`}
                      tooltip={item.title}
                      asChild
                    >
                      <Link href={item.href}>
                        <item.icon className={pathname === item.href ? "text-white" : ""} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className="hover:text-foreground hover:bg-violet-100 dark:hover:bg-violet-900/30"
                tooltip={item.title}
                asChild
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
