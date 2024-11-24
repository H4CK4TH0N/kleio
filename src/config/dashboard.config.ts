import type { DashboardConfig } from "@/types";
import { LayoutDashboard, Calendar, LineChartIcon, Settings } from "lucide-react";

export const dashboardConfig: DashboardConfig = {
  defaultNavbar: [
    {
      title: "Dashboard",
      href: "/dashboard",
      Icon: LayoutDashboard,
    },
    {
      title: "Meetings",
      href: "/meetings",
      Icon: Calendar,
    },
    // {
    //   title: "Analytics",
    //   href: "/analytics",
    //   Icon: LineChartIcon,
    // },
    {
      title: "Settings",
      href: "/settings",
      Icon: Settings,
    },
  ]
}