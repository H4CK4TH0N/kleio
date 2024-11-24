"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, Bar, BarChart, XAxis, YAxis, LineChart, Line, ScatterChart, Scatter } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ParticipantEngagement } from "@/types";

type ParticipantsEngagementProps = {
  participantsEngagement: ParticipantEngagement[];
};

const chartConfig: ChartConfig = {
  speakingTime: {
    label: "Speaking Time (min)",
    color: "hsl(var(--chart-1))",
  },
  interventionCount: {
    label: "Intervention Count",
    color: "hsl(var(--chart-2))",
  },
  engagementScore: {
    label: "Engagement Score",
    color: "hsl(var(--chart-3))",
  },
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
};

export function ParticipantEngagement({
  participantsEngagement,
}: ParticipantsEngagementProps) {
  const chartData = participantsEngagement.map(
    ({ participantId, speakingTime, ...rest }) => ({
      participant: participantId,
      speakingTime: speakingTime / 60, // Convert to minutes
      originalSpeakingTime: speakingTime,
      ...rest,
    })
  );

  const avgSpeakingTime =
    chartData.reduce((sum, item) => sum + item.originalSpeakingTime, 0) /
    chartData.length;
  const avgInterventionCount =
    chartData.reduce((sum, item) => sum + item.interventionCount, 0) /
    chartData.length;
  const avgEngagementScore =
    chartData.reduce((sum, item) => sum + item.engagementScore, 0) /
    chartData.length;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background p-2 border rounded shadow-sm">
          <p className="font-bold">{data.participant}</p>
          <p>Speaking Time: {formatTime(data.originalSpeakingTime)}</p>
          <p>Intervention Count: {data.interventionCount}</p>
          <p>Engagement Score: {data.engagementScore.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  const renderEngagementChart = (dataKey: string, fill: string) => {
    if (chartData.length <= 2) {
      return (
        <BarChart data={chartData}>
          <ChartTooltip content={<CustomTooltip />} />
          <XAxis dataKey="participant" />
          <YAxis />
          <Bar
            dataKey={dataKey}
            fill={fill}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      );
    }

    return (
      <RadarChart data={chartData}>
        <ChartTooltip content={<CustomTooltip />} />
        <PolarAngleAxis dataKey="participant" />
        <PolarGrid />
        <Radar
          dataKey={dataKey}
          fill={fill}
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  };

  const renderScoreChart = () => {
    return (
      <LineChart data={chartData}>
        <ChartTooltip content={<CustomTooltip />} />
        <XAxis dataKey="participant" />
        <YAxis domain={[0, 1]} />
        <Line
          type="monotone"
          data={chartData}
          stroke="var(--color-engagementScore)"
          dataKey="engagementScore"
          dot={{ fill: "var(--color-engagementScore)" }}
        />
      </LineChart>
    );
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-3 justify-between">
      <Card className="w-full md:w-1/2">
        <CardHeader className="items-center pb-4">
          <CardTitle>Participant Engagement</CardTitle>
          <CardDescription>
            Speaking time and intervention metrics
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[350px]"
          >
            {renderEngagementChart("speakingTime", "var(--color-speakingTime)")}
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Average Metrics:
          </div>
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            Speaking Time: {formatTime(avgSpeakingTime)} | Intervention Count:{" "}
            {avgInterventionCount.toFixed(2)}
          </div>
        </CardFooter>
      </Card>
      <Card className="w-full md:w-1/2">
        <CardHeader className="items-center pb-4">
          <CardTitle>Engagement Score</CardTitle>
          <CardDescription>
            Overall engagement score trend
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[350px]"
          >
            {renderScoreChart()}
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            Average Score: {avgEngagementScore.toFixed(2)}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
