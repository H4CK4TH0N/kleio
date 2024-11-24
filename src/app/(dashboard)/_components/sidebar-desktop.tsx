"use client";

import { dashboardConfig } from "@/config/dashboard.config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import ThemeToggler from "@/components/theme/theme-toggler";
import type { NavItem as NavItemType } from "@/types";
import Branding from "@/components/navbar/brand";

export default function SidebarDesktop() {
  return (
    <div className="hidden w-[300px] h-full md:flex p-3">
      <aside className="hidden w-[300px] flex-col md:flex md:flex-1 md:flex-grow rounded-lg justify-between p-2 bg-accent/50">
        <div className="flex flex-col gap-1">
          <Branding />
          {dashboardConfig.defaultNavbar.map((item) => (
            <NavItem key={item.title} {...item} />
          ))}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="size-8">
            <UserButton />
          </div>
          <ThemeToggler />
        </div>
      </aside>
    </div>
  );
}

const NavItem = ({ title, href, Icon }: NavItemType) => {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href);

  return (
    <Button
      asChild
      variant={active ? "secondary" : "ghost"}
      size="sm"
      className="justify-start items-center text-sm gap-2"
    >
      <Link href={href}>
        {Icon && <Icon size={16} strokeWidth={1} />}
        <span>{title}</span>
      </Link>
    </Button>
  );
};
