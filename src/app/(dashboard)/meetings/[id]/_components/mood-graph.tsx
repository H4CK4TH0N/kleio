"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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

import type { MoodGraph } from "@/types";

type MoodGraphProps = {
  moodGraph: MoodGraph;
};

const chartConfig = {
  score: {
    label: "Mood",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MoodGraph({ moodGraph }: MoodGraphProps) {
  const chartData = moodGraph.aspects;

  return (
    <Card className="w-full">
      <CardHeader className="items-center">
        <CardTitle>Mood Graph</CardTitle>
        <CardDescription>
          Shows the mood of the meeting participants
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[400px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="mood" />
            <PolarGrid />
            <Radar
              dataKey="score"
              fill="var(--color-score)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
