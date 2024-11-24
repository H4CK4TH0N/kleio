import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

type StatsProps = {
  numberOfMeetings: number;
  totalMeetingDuration: number;
  averageMeetingDuration: number;
};

export const Stats = ({ numberOfMeetings, totalMeetingDuration, averageMeetingDuration }: StatsProps) => {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Meetings</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {numberOfMeetings} meetings
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total duration</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.floor(totalMeetingDuration / 60)} hour{Math.floor(totalMeetingDuration / 60) !== 1 ? 's' : ''} {Math.round(totalMeetingDuration % 60)} minute{Math.round(totalMeetingDuration % 60) !== 1 ? 's' : ''}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Meeting duration
          </CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {averageMeetingDuration.toFixed(2)} minutes
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const StatsLoadingState = async () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 md:gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Meetings</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="w-40 h-6 bg-secondary animate-pulse rounded-lg"></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total duration</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="w-40 h-6 bg-secondary animate-pulse rounded-lg"></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Meeting duration
          </CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="w-40 h-6 bg-secondary animate-pulse rounded-lg"></div>
        </CardContent>
      </Card>
    </div>
  );
};
