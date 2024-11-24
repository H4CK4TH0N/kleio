"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  date: {
    label: "Date",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type chartData = Record<"date", number>[];
type MeetingFrequencyProps = {
  chartData: chartData;
};

export function MeetingFrequency({ chartData }: MeetingFrequencyProps) {
  const currentMonth = new Date().getMonth();
  const currentMonthName = new Date().toLocaleString("default", {
    month: "long",
  });
  const numberOfDaysInMonth = new Date(
    new Date().getFullYear(),
    currentMonth + 1,
    0
  ).getDate();

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Meetings this month</CardTitle>
        <CardDescription>
          {`${currentMonthName} 1 - ${currentMonthName} ${numberOfDaysInMonth}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-date)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--color-date)" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone"
              dataKey="count"
              stroke="var(--color-date)"
              fillOpacity={1}
              fill="url(#colorCount)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
