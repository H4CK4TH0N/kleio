"use server";

import { db } from "@/lib/db";
import { User } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

type NotificationSettingsSchema = {
  communicationEmail: boolean;
  securityEmail: boolean;
  meetingEmail: boolean;
};

export async function getNotificationSettings(userEmail: string) {
  const results = await db
    .select({
      communicationEmail: User.communicationEmail,
      securityEmail: User.securityEmail,
      meetingEmail: User.meetingEmail,
    })
    .from(User)
    .where(eq(User.email, userEmail));
  return results[0];
}

export async function updateNotificationSettings(
  userEmail: string,
  data: NotificationSettingsSchema
) {
  return await db.update(User).set(data).where(eq(User.email, userEmail)).returning();
}
