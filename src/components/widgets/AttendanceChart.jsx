"use client";
import Image from "next/image";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

const data = [
    {
        name: "Mon",
        present: 60,
        absent: 40,
    },
    {
        name: "Tue",
        present: 70,
        absent: 60,
    },
    {
        name: "Wed",
        present: 90,
        absent: 75,
    },
    {
        name: "Thu",
        present: 90,
        absent: 75,
    },
    {
        name: "Fri",
        present: 65,
        absent: 55,
    },
];

const AttendanceChart = () => {
    return (
        <Card className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Attendance</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MoreVertical className="h-5 w-5 text-muted-foreground" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Report</DropdownMenuItem>
                        <DropdownMenuItem>Export Data</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={500} height={300} data={data} barSize={20}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tick={{ fill: "#d1d5db" }}
                            tickLine={false}
                        />
                        <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                        <Tooltip
                            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
                        />
                        <Legend
                            align="left"
                            verticalAlign="top"
                            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                        />
                        <Bar
                            dataKey="present"
                            fill="#FAE27C"
                            legendType="circle"
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar
                            dataKey="absent"
                            fill="#C3EBFA"
                            legendType="circle"
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default AttendanceChart;