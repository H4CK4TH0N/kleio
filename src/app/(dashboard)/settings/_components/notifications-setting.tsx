"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getNotificationSettings, updateNotificationSettings } from "./actions";

import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function NotificationSetting() {
  const { user } = useUser();
  if (!user || !user.emailAddresses.length) {
    redirect("/sign-in");
  }

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [securityNotifications, setSecurityNotifications] = useState(true);
  const [meetingNotification, setMeetingNotification] = useState(true);

  const handleEmailNotifications = () =>
    setEmailNotifications(!emailNotifications);
  const handleSecurityNotifications = () =>
    setSecurityNotifications(!securityNotifications);
  const handleMeetingNotifications = () =>
    setMeetingNotification(!meetingNotification);

  const saveConfig = async () => {
    await updateNotificationSettings(user.emailAddresses[0].emailAddress, {
      communicationEmail: emailNotifications,
      securityEmail: securityNotifications,
      meetingEmail: meetingNotification,
    })
  };

  useEffect(() => {
    async function getNotificationSettingsState(userEmail: string) {
      const settings = await getNotificationSettings(userEmail);
      if (!settings) return;
      setEmailNotifications(settings.communicationEmail ?? true);
      setSecurityNotifications(settings.securityEmail ?? true);
      setMeetingNotification(settings.meetingEmail ?? true);
    }

    getNotificationSettingsState(user.emailAddresses[0].emailAddress);
  }, [user.emailAddresses]);

  return (
    <div className="flex w-full flex-col mt-5">
      <h1 className="text-lg">Email Notifications</h1>
      <div className="my-2 flex max-w-lg flex-col gap-3">
        <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
          <div>
            <h1>Communication emails</h1>
            <p className="text-xs text-muted-foreground">
              Receive emails about your account activity.
            </p>
          </div>
          <Switch
            checked={emailNotifications}
            onCheckedChange={handleEmailNotifications}
          />
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
          <div>
            <h1>Security emails</h1>
            <p className="text-xs text-muted-foreground">
              Receive emails about your account activity and security.
            </p>
          </div>
          <Switch
            checked={securityNotifications}
            onCheckedChange={handleSecurityNotifications}
          />
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
          <div>
            <h1>Meetings summary update</h1>
            <p className="text-xs text-muted-foreground">
              Receive updates by email whenever a meeting is processed.
            </p>
          </div>
          <Switch
            checked={meetingNotification}
            onCheckedChange={handleMeetingNotifications}
          />
        </div>
      </div>
      <Button size="sm" className="inline-flex w-36" onClick={saveConfig}>
        Update notifications
      </Button>
    </div>
  );
}
