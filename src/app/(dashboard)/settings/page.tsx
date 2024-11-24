import NotificationSetting from "./_components/notifications-setting";

export default function Settings() {
  return (
    <div className="w-full px-1 lg:pr-3 mt-7">
      <h1 className="head-text-sm py-1">Settings</h1>
      <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
      <NotificationSetting />
    </div>
  )
}