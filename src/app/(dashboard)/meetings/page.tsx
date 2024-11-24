import MeetingList from "./_components/meeting-list";

export default async function Meetings() {
  return (
    <div className="w-full px-1 md:pr-3">
      <h1 className="head-text-sm mt-7 py-1">Meetings</h1>
      <p className="text-muted-foreground">
        See past meetings. Click on a meeting to see more details and analytics.
      </p>
      <MeetingList />
    </div>
  );
}
