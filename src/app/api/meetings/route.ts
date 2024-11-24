import { db } from "@/lib/db";
import { Meeting } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.json();
  const email = body.email;

  const meetings = await db
    .select({
      id: Meeting.id,
      startTime: Meeting.startTime,
    })
    .from(Meeting)
    .where(eq(Meeting.userEmail, email))
    .limit(7)
    .orderBy(desc(Meeting.startTime));
  return new Response(JSON.stringify(meetings), { status: 200 });
}