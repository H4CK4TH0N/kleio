export default function Loading() {
  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      <div className="w-full my-1 p-2 h-screen overflow-hidden flex flex-col">
        <div className="w-1/2 h-10 rounded bg-muted/50 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
          <div className="h-32 w-full rounded-lg border bg-muted/50 animate-pulse"></div>
          <div className="h-32 w-full rounded-lg border bg-muted/50 animate-pulse"></div>
          <div className="h-32 w-full rounded-lg border bg-muted/50 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full">
          <div className="md:col-span-2 h-full w-full rounded-lg border bg-muted/50 animate-pulse"></div>
          <div className="h-full w-full rounded-lg border bg-muted/50 animate-pulse"></div>
        </div>
      </div>
    </main>
  );
}
