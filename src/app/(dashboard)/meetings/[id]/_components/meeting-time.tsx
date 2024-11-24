export function MeetingTime({
  startTime,
  endTime,
}: {
  startTime: Date;
  endTime: Date;
}) {
  const formattedStartTime = new Date(startTime).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatTime = (date: Date) => {
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  const formattedTimeRange = `${formatTime(new Date(startTime))} - ${formatTime(
    new Date(endTime)
  )}`;

  const duration = new Date(endTime).getTime() - new Date(startTime).getTime();
  const durationInSeconds = duration / 1000;
  const durationInMinutes = Math.floor(durationInSeconds / 60);
  const remainingSeconds = Math.round(durationInSeconds % 60);
  let formattedDuration = "";

  if (durationInMinutes < 60) {
    if (durationInMinutes > 0) {
      formattedDuration += `${durationInMinutes} minute${
        durationInMinutes !== 1 ? "s" : ""
      }`;
    }
    if (remainingSeconds > 0) {
      if (formattedDuration) formattedDuration += " and ";
      formattedDuration += `${remainingSeconds} second${
        remainingSeconds !== 1 ? "s" : ""
      }`;
    }
    formattedDuration += " long meeting";
  } else {
    const durationInHours = Number((durationInMinutes / 60).toFixed(1));
    formattedDuration = `${durationInHours} hour${
      durationInHours !== 1 ? "s" : ""
    } long meeting`;
  }

  return (
    <div className="flex flex-col border rounded-lg p-2 md:p-3 md:text-right text-sm">
      <h2>{formattedStartTime}</h2>
      <h2>{formattedDuration}</h2>
      <p className="text-muted-foreground">{formattedTimeRange}</p>
    </div>
  );
}
