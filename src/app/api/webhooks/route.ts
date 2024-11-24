import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { env } from '@/env'
import { db } from '@/lib/db'
import { User } from '@/lib/db/schema'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = env.WEBHOOK_SECRET

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload);
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }

  const eventType = evt.type;
  if (eventType === 'user.created') {
    const emails = payload.data.email_addresses
    if (!emails || emails.length === 0) {
      return new Response('No email addresses found in payload', {
        status: 400
      })
    }

    const email = emails[0].email_address as string
    const user = await db.insert(User).values({ 
      email: email,
      numberOfMeetings: 0,
      totalMeetingDuration: 0,
      averageMeetingDuration: 0,
      meetingEfficiencyScore: 0,
      participants: 0
    }).returning();
    console.log('User created:', user);
  }

  if (eventType === 'user.updated') {
    const emails = payload.data.email_addresses
    if (!emails || emails.length === 0) {
      return new Response('No email addresses found in payload', {
        status: 400
      })
    }

    const email = emails[0].email_address
    const user = await db.update(User).set({ email }).returning();
    console.log('User updated:', user);
  }

  return new Response('', { status: 200 })
}