import { MeetingsFallback } from "./_components/meeting";

export default async function Loading() {
  return (
    <div className="w-full px-1 md:pr-3">
      <h1 className="head-text-sm mt-7 py-1">Meetings</h1>
      <p className="text-muted-foreground">
        See past meetings. Click on a meeting to see more details and analytics.
      </p>
      <MeetingsFallback />
    </div>
  );
}
