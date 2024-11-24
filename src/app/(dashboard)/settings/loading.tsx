export default function Loading() {
  return (
    <div className="w-full px-1 lg:px-3 mt-7">
      <h1 className="head-text-sm py-1">Settings</h1>
      <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
      <div className="flex w-full flex-col mt-5">
      <div className="w-40 h-6 rounded-lg bg-muted animate-pulse"></div>
      <div className="my-2 flex max-w-lg flex-col gap-3">
        <div className="w-80 h-12 rounded-lg bg-muted animate-pulse"></div>
        <div className="w-80 h-12 rounded-lg bg-muted animate-pulse"></div>
        <div className="w-80 h-12 rounded-lg bg-muted animate-pulse"></div>
      </div>
      <div className="w-20 h-6 rounded-lg bg-muted animate-pulse"></div>
    </div>
    </div>
  )
}