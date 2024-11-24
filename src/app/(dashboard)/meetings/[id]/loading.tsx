export default function Loading() {
  return (
    <div className="w-full p-2 h-screen overflow-hidden flex flex-col">
      <header className="mt-1 mb-3 flex flex-wrap md:flex-nowrap justify-between w-full">
        <div className="space-y-2 w-full">
          <div className="h-12 w-1/2 rounded bg-muted/50 animate-pulse border"></div>
          <div className="h-6 w-52 rounded bg-muted/50 animate-pulse border"></div>
        </div>
        <div className="h-[72px] w-40 rounded-lg bg-muted/50 border animate-pulse"></div>
      </header>
      <div className="w-full h-full bg-muted/50 border rounded-lg animate-pulse mb-1"></div>
    </div>
  );
}
