import { db } from "@/lib/db";
import { Meeting, User } from "@/lib/db/schema";
import { insertMeetingSchema, insertMeetingMetadataSchema } from "@/lib/schema";
import { and, eq } from "drizzle-orm";

export const maxDuration = 60;

export async function POST(req: Request) {
  const body = await req.json();
  const parsedBody = insertMeetingSchema.safeParse(body);

  if (!parsedBody.success) {
    return new Response(JSON.stringify(parsedBody.error), { status: 400 });
  }

  const { id, email, startTime, endTime, participants } = parsedBody.data;

  try {
    const meeting = await db.transaction(async (tx) => {
      const userDataResponse = await tx
        .select({
          numberOfMeetings: User.numberOfMeetings,
          totalMeetingDuration: User.totalMeetingDuration,
        })
        .from(User)
        .where(eq(User.email, email));

      if (userDataResponse.length === 0) {
        throw new Error("User not found");
      }

      const insertedMeeting = await tx
        .insert(Meeting)
        .values({
          id,
          userEmail: email,
          startTime,
          endTime,
          participants,
          processed: false,
        })
        .returning();

      const meetingDuration =
        (new Date(endTime).getTime() - new Date(startTime).getTime()) /
        1000 /
        60 /
        60;

      const userData = userDataResponse[0];

      await tx.update(User).set({
        numberOfMeetings: userData.numberOfMeetings + 1,
        totalMeetingDuration: userData.totalMeetingDuration + meetingDuration,
        averageMeetingDuration:
          (userData.totalMeetingDuration + meetingDuration) /
          (userData.numberOfMeetings + 1),
      });

      return insertedMeeting;
    });

    return new Response(JSON.stringify(meeting), { status: 200 });
  } catch (e: any) {
    console.log(e);
    if (e.message === "User not found") {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    return new Response(
      "An error occurred while saving the meeting. Please try again later.",
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const body = await req.json();
  const parsedBody = insertMeetingMetadataSchema.safeParse(body);

  if (!parsedBody.success) {
    return new Response(JSON.stringify(parsedBody.error), { status: 400 });
  }

  try {
    const res = await db
      .update(Meeting)
      .set({
        processed: true,
        ...parsedBody.data,
      })
      .where(
        and(
          eq(Meeting.id, parsedBody.data.id),
          eq(Meeting.userEmail, parsedBody.data.email)
        )
      ).returning();

    if (res.length === 0) {
      return new Response(
        JSON.stringify({
          message: "Meeting not found",
        }),
        { status: 404 }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Meeting updated successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "An error occurred while updating the meeting",
      }),
      { status: 500 }
    );
  }
}
