export default function Loading() {
  return (
    <section className="w-full h-screen">
      <div className="h-full grid flex-1 md:grid-cols-[300px_1fr] overflow-hidden">
        <div className="hidden w-[300px] h-full md:flex p-3">
          <aside className="hidden w-[300px] flex-col md:flex md:flex-1 md:flex-grow rounded-lg justify-between p-2 bg-accent/50">
            <div className="flex flex-col gap-3">
              <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
              <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
              <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
              <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
              <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
              <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="size-8 rounded-full bg-muted/50 animate-pulse"></div>
              <div className="size-8 rounded bg-muted/50 animate-pulse"></div>
            </div>
          </aside>
        </div>
        <div className="fixed bottom-0 w-full md:hidden flex justify-between items-center p-2 bg-background border-t z-50 gap-2">
          <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
          <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
          <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
          <div className="h-10 w-full border rounded bg-muted/50 animate-pulse" />
        </div>
        <main className="flex w-full flex-1 flex-col overflow-scroll">
          <div className="w-full my-3 p-2">
            <div className="w-1/2 h-10 rounded bg-muted/50 animate-pulse"></div>
            <div className=""></div>
          </div>
        </main>
      </div>
    </section>
  );
}
