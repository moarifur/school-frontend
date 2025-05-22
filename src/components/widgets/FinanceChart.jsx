"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Jan",
        income: 4000,
        expense: 2400,
    },
    {
        name: "Feb",
        income: 3000,
        expense: 1398,
    },
    {
        name: "Mar",
        income: 2000,
        expense: 9800,
    },
    {
        name: "Apr",
        income: 2780,
        expense: 3908,
    },
    {
        name: "May",
        income: 1890,
        expense: 4800,
    },
    {
        name: "Jun",
        income: 2390,
        expense: 3800,
    },
    {
        name: "Jul",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Aug",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Sep",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Oct",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Nov",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Dec",
        income: 3490,
        expense: 4300,
    },
];

const FinanceChart = () => {
    return (
        <Card className="w-full h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <h2 className="text-lg font-semibold">Finance</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="rounded-full p-1 hover:bg-gray-100">
                            <MoreHorizontal className="h-4 w-4 text-gray-500" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Export Data</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent className="h-[calc(100%-60px)]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tick={{ fill: "#d1d5db" }}
                            tickLine={false}
                            tickMargin={10}
                        />
                        <YAxis
                            axisLine={false}
                            tick={{ fill: "#d1d5db" }}
                            tickLine={false}
                            tickMargin={20}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #e5e7eb",
                                borderRadius: "0.5rem",
                                boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)"
                            }}
                        />
                        <Legend
                            align="center"
                            verticalAlign="top"
                            wrapperStyle={{
                                paddingTop: "10px",
                                paddingBottom: "30px"
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="income"
                            stroke="#C3EBFA"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="expense"
                            stroke="#CFCEFF"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default FinanceChart;