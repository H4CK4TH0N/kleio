"use client";

import type { TimelineItem } from "@/types";
import { useMemo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TimelineProps = {
  timeline: TimelineItem[];
};

export function Timeline({ timeline }: TimelineProps) {
  const totalDuration = useMemo(() => {
    return timeline.reduce((total, item) => {
      const start = new Date(item.startTime).getTime();
      const end = new Date(item.endTime).getTime();
      return total + (end - start);
    }, 0);
  }, [timeline]);

  const getItemWidth = (item: TimelineItem) => {
    const start = new Date(item.startTime).getTime();
    const end = new Date(item.endTime).getTime();
    const duration = end - start;
    return (duration / totalDuration) * 100;
  };

  return (
    <div className="w-full">
      <div className="w-full h-5 rounded-full flex">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="h-full relative group/timeline"
            style={{ width: `${getItemWidth(item)}%` }}
          >
            <Tooltip delayDuration={300}>
              <TooltipTrigger className="w-full h-full">
                <div
                  style={{
                    backgroundColor: `hsl(${(index + 1) * 210}, 70%, 70%)`,
                  }}
                  className="h-full transition-all z-[50] duration-300 ease-in-out group-hover/timeline:brightness-110 border rounded-full mr-1"
                >
                  <p className="text-xs text-black">
                    {new Date(item.startTime).toLocaleTimeString()}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                  <p className="font-semibold">{item.topic}</p>
                  <p className="text-sm">{item.speaker}</p>
                  <p className="text-xs">
                    {new Date(item.startTime).toLocaleTimeString()} -{" "}
                    {new Date(item.endTime).toLocaleTimeString()}
                  </p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}
