"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { ContestantData } from "@/types/contestant"
import { ChartTypes } from "@/types/chart"
import { getLeadingCandidateWithPercentageDifference } from "@/lib/utils"

export const description = "The Votes Chart"

const chartData = [
  { name: "Adebayo", votes: 186 },
  { name: "Maro", votes: 305 },
  { name: "Joel", votes: 237 },
  { name: "Wilson", votes: 73 },
  { name: "Jephthah", votes: 209 },
  { name: "Oscar", votes: 214 },
]

const chartConfig = {
  votes: {
    label: "Votes",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Chart({ contestants }: any) {
    const chartData = contestants.map(({name, votes}: ContestantData) => ({ name, votes }))
    const LeadingCandidateWithPercentageDifference = getLeadingCandidateWithPercentageDifference(chartData)

  return (
    <Card className=" w-full md:w-2/3 h-full border-none shadow-none">
      <CardHeader>
        {/* <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(' ')}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="votes" fill="#313131" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium text-xs leading-none">
            {LeadingCandidateWithPercentageDifference} <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
