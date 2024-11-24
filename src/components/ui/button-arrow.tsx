import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonArrowProps = React.ComponentProps<typeof Button>

export default function ButtonArrow(props: ButtonArrowProps) {
  return (
    <Button {...props} variant={props.variant} className={cn("group", props.className)}>
      <div className="flex items-center gap-1">
        {props.children}
        <ArrowRight size={14} className="group-hover:translate-x-1 group-hover:rotate-180 transition-all transform-gpu duration-300 delay-75 ease-in-out" />
      </div>
    </Button>
  )
}