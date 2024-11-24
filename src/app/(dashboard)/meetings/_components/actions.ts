"use server"

import { db } from "@/lib/db";
import { Meeting } from "@/lib/db/schema"
import { eq } from "drizzle-orm";

export const deleteMeeting = async (id: string) => {
  return await db.delete(Meeting).where(eq(Meeting.id, id)).returning();
};
