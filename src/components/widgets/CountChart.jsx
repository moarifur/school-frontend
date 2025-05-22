"use client";

import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
    { name: "Total", count: 106, fill: "white" },
    { name: "Girls", count: 53, fill: "#FAE27C" },
    { name: "Boys", count: 53, fill: "#C3EBFA" },
];

export const CountChart = () => {
    return (
        <div className="bg-card rounded-xl p-4 border shadow-sm h-full flex flex-col">
            {/* Chart */}
            <div className="flex-1 min-h-0 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src="/maleFemale.png"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-4">
                <div className="text-center">
                    <div className="mx-auto h-4 w-4 rounded-full bg-blue-200" />
                    <p className="font-bold">1,234</p>
                    <p className="text-xs text-muted-foreground">Boys (55%)</p>
                </div>
                <div className="text-center">
                    <div className="mx-auto h-4 w-4 rounded-full bg-yellow-200" />
                    <p className="font-bold">1,234</p>
                    <p className="text-xs text-muted-foreground">Girls (45%)</p>
                </div>
            </div>
        </div>
    );
};