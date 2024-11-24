import { currentUser } from "@clerk/nextjs/server";
import { Stats, StatsLoadingState } from "./_components/stats";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { MeetingFrequency } from "./_components/meeting-frequency";
import { db } from "@/lib/db";
import { Meeting, User } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { EfficienyScore } from "./_components/score";

type chartData = Record<"date", number>[];
export default async function Dashboard() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const userData = await db.query.User.findFirst({
    where: eq(User.email, user.emailAddresses[0].emailAddress),
  });

  if (!userData) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-lg md:text-xl lg:text-2xl">No user found</h1>
      </div>
    );
  }

  const meetings = await db
    .select({
      id: Meeting.id,
      startTime: Meeting.startTime,
      endTime: Meeting.endTime,
    })
    .from(Meeting)
    .where(eq(Meeting.userEmail, user.emailAddresses[0].emailAddress));

  const currentMonth = new Date().getMonth();
  const numberOfDaysInMonth = new Date(
    new Date().getFullYear(),
    currentMonth + 1,
    0
  ).getDate();

  const chartData: chartData = Array.from(
    { length: numberOfDaysInMonth },
    (_, i) => {
      const date = new Date(new Date().getFullYear(), currentMonth, i + 1);
      const meetingsOnDate = meetings.filter(
        (meeting) =>
          meeting.startTime.getDate() === date.getDate() &&
          meeting.startTime.getMonth() === date.getMonth()
      );
      return {
        date: date.getDate(),
        count: meetingsOnDate.length,
      };
    }
  );

  const efficiencyScore = userData.meetingEfficiencyScore;

  return (
    <div className="w-full px-1 md:pr-3 mt-7">
      <h1 className="text-lg md:text-2xl lg:text-3xl font-heading font-semibold mb-5">
        Welcome to your space, {user.firstName}
      </h1>
      <Suspense fallback={<StatsLoadingState />}>
        <Stats
          numberOfMeetings={userData.numberOfMeetings}
          totalMeetingDuration={userData.totalMeetingDuration}
          averageMeetingDuration={userData.averageMeetingDuration}
        />
      </Suspense>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
        <div className="w-full col-span-2">
          <MeetingFrequency chartData={chartData} />
        </div>
        <div className="w-full col-span-1">
          <EfficienyScore score={efficiencyScore} />
        </div>
      </div>
    </div>
  );
}
