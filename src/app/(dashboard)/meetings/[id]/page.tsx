import { db } from "@/lib/db";
import { Meeting } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { MeetingTime } from "./_components/meeting-time";
import { Takeaways } from "./_components/takeaways";
import { Description } from "./_components/descriptions";
import { ActionItems } from "./_components/action-items";
import { MoodGraph } from "./_components/mood-graph";
import { Timeline } from "./_components/timeline";
import { ParticipantEngagement } from "./_components/participants-engagement";
import { Sentiment } from "./_components/sentiment";
import Presentation from "./_components/presentation";
import { Button } from "@/components/ui/button";
import { getFileUrl } from "@/lib/utils";

export default async function MeetingPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const meeting = await db.query.Meeting.findFirst({
    where: eq(Meeting.id, id),
  });

  if (!meeting) {
    return (
      <div className="w-full h-[100dvh] flex justify-center items-center">
        <h1 className="text-center">
          Meeting with id{" "}
          <span className="text-background bg-foreground rounded-lg px-2 py-[1px] text-sm">
            {id}
          </span>{" "}
          not found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full px-1 md:pr-3 my-7 space-y-3">
      <header className="mb-5 flex flex-wrap justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-heading pb-1">{meeting.title}</h1>
          <p className="text-muted-foreground lg:text-lg">
            {meeting.shortDescription}
          </p>
        </div>
        <MeetingTime startTime={meeting.startTime} endTime={meeting.endTime} />
      </header>
      <div>
        <Button variant="outline" className="bg-gradient-to-r from-[#2545D3] to-[#566DE8]" asChild>
          <a href={getFileUrl(`${meeting.id}-handwritten-note.pdf`)} target="_blank">
            ✨ Smart Export
          </a>
        </Button>
      </div>
      <Presentation id={meeting.id} />
      {meeting.description && <Description text={meeting.description} />}
      {meeting.timeline && <Timeline timeline={meeting.timeline} />}
      <div className="space-y-8 py-8">
        {meeting.actionItems && (
          <ActionItems actionItems={meeting.actionItems} />
        )}
        {meeting.takeaways && <Takeaways takeaways={meeting.takeaways} />}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {meeting.moodGraph && <MoodGraph moodGraph={meeting.moodGraph} />}
        {meeting.sentimentOverTime && (
          <Sentiment sentimentOverTime={meeting.sentimentOverTime} />
        )}
      </div>
      {meeting.participantEngagement && (
        <ParticipantEngagement
          participantsEngagement={meeting.participantEngagement}
        />
      )}
    </div>
  );
}
