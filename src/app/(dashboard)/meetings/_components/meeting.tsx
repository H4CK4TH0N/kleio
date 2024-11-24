import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "./delete-button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MeetingProps = {
  startTime: Date;
  endTime: Date;
  id: string;
  processed: boolean;
};

export const Meeting = async ({ startTime, endTime, id, processed }: MeetingProps) => {
  const formattedStartTime = new Date(startTime).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatTime = (date: Date) => {
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  const formattedTimeRange = `${formatTime(new Date(startTime))} - ${formatTime(
    new Date(endTime)
  )}`;

  const duration = new Date(endTime).getTime() - new Date(startTime).getTime();
  const durationInSeconds = duration / 1000;
  const durationInMinutes = Math.floor(durationInSeconds / 60);
  const remainingSeconds = Math.round(durationInSeconds % 60);
  let formattedDuration = "";

  if (durationInMinutes < 60) {
    if (durationInMinutes > 0) {
      formattedDuration += `${durationInMinutes} minute${
        durationInMinutes !== 1 ? "s" : ""
      }`;
    }
    if (remainingSeconds > 0) {
      if (formattedDuration) formattedDuration += " and ";
      formattedDuration += `${remainingSeconds} second${
        remainingSeconds !== 1 ? "s" : ""
      }`;
    }
    formattedDuration += " long meeting";
  } else {
    const durationInHours = Number((durationInMinutes / 60).toFixed(1));
    formattedDuration = `${durationInHours} hour${
      durationInHours !== 1 ? "s" : ""
    } long meeting`;
  }

  return (
    <div className="border w-full flex flex-wrap justify-between gap-4 sm:gap-0 p-2 lg:p-4 rounded-lg text-sm md:text-base">
      <div className="flex gap-2 w-full justify-between sm:justify-start sm:w-auto">
        <div className="flex flex-col gap-1 lg:min-w-64">
          <p>{formattedStartTime}</p>
          <p className="text-muted-foreground">{formattedTimeRange}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>{formattedDuration}</p>
          <p className="text-muted-foreground">{id}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-between w-full sm:w-auto">
        <p className={cn("h-8 rounded-md px-3 text-xs border flex justify-center items-center", processed ? "bg-blue-500 text-foreground" : "bg-yellow-500 text-zinc-700")}>{processed ? "Processed" : "Processing..."}</p>
        <Button size="sm" disabled={!processed} asChild>
          <Link href={`/meetings/${id}`}>View Details</Link>
        </Button>
        <DeleteButton id={id} />
      </div>
    </div>
  );
};

export const MeetingsFallback = () => {
  return (
    <div className="w-full flex flex-col gap-4 mt-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <MeetingLoadingState key={i} />
      ))}
    </div>
  );
};

const MeetingLoadingState = () => {
  return (
    <div className="border w-full flex justify-between p-2 lg:p-4 rounded-lg">
      <div className="flex gap-2">
        <div className="flex flex-col gap-1 lg:min-w-64">
          <div className="w-40 h-6 bg-muted animate-pulse rounded"></div>
          <div className="w-52 h-6 bg-muted animate-pulse rounded"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-52 h-6 bg-muted animate-pulse rounded"></div>
          <div className="w-40 h-6 bg-muted animate-pulse rounded"></div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-20 h-6 bg-muted animate-pulse rounded"></div>
        <div className="w-20 h-6 bg-muted animate-pulse rounded"></div>
        <Ellipsis size={18} />
      </div>
    </div>
  );
};
