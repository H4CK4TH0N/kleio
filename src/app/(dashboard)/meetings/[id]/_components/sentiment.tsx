"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { SentimentOverTime } from "@/types"

type SentimentProps = {
  sentimentOverTime: SentimentOverTime;
}

const chartConfig = {
  sentiment: {
    label: "Sentiment",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Sentiment({ sentimentOverTime }: SentimentProps) {
  const chartData = sentimentOverTime.sentimentPoints;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sentiment over time</CardTitle>
        <CardDescription>
          A graph showing the sentiment of your meetings over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto max-h-[400px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timestamp"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => new Date(value).toLocaleTimeString()}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="sentiment"
              type="natural"
              stroke="var(--color-sentiment)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
