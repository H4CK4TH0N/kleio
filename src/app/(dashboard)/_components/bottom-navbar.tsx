"use client";

import { dashboardConfig } from "@/config/dashboard.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import type { NavItem as NavItemType } from "@/types";
import { cn } from "@/lib/utils";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 w-full md:hidden flex justify-between items-cente p-2 bg-background border-t z-50">
      {dashboardConfig.defaultNavbar.map((item) => (
        <NavItem key={item.title} {...item} />
      ))}
      <UserButton />
    </div>
  );
}

const NavItem = ({ title, href, Icon }: NavItemType) => {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href);

  return (
    <Link href={href} className={cn("flex flex-col gap-1 items-center p-1 rounded-lg", active && "bg-muted")}>
      {Icon && <Icon size={16} strokeWidth={1} />}
      <p className="text-xs">{title}</p>
    </Link>
  );
};
