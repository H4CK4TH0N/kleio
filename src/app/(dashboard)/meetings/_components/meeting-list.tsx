import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { desc, eq } from "drizzle-orm";
import { Meeting } from "@/lib/db/schema";
import { redirect } from "next/navigation";
import {
  Meeting as MeetingComponent,
  MeetingsFallback,
} from "./meeting";
import { Suspense } from "react";

export default async function MeetingList() {
  const user = await currentUser();
  if (!user || !user.emailAddresses.length) {
    redirect("/sign-in");
  }

  const email = user.emailAddresses[0].emailAddress;
  const meetings = await db
    .select({
      id: Meeting.id,
      title: Meeting.title,
      startTime: Meeting.startTime,
      endTime: Meeting.endTime,
      processed: Meeting.processed,
    })
    .from(Meeting)
    .where(eq(Meeting.userEmail, email))
    .orderBy(desc(Meeting.startTime));

  return (
    <Suspense fallback={<MeetingsFallback />}>
      <div id="meetings-container" className="w-full flex flex-col gap-4 mt-5">
        {meetings.map((meeting) => (
          <MeetingComponent
            key={meeting.id}
            startTime={meeting.startTime}
            endTime={meeting.endTime}
            id={meeting.id}
            processed={meeting.processed}
          />
        ))}
        {meetings.length === 0 && <p className="text-muted-foreground">No meetings yet</p>}
      </div>
    </Suspense>
  );
}
