import { cn } from "@/lib/utils";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger" | "info";
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
        "border-red-900 bg-red-50 text-slate-900": type === "danger",
        "border-yellow-900 bg-yellow-50 text-slate-900": type === "warning",
        "border-blue-900 bg-blue-100 text-slate-900": type === "info",
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}