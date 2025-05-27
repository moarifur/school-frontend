"use client";
import {PieChart, Pie, ResponsiveContainer, Cell} from "recharts";
import { MoreVertical } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const data = [
    { name: "Group A", value: 92, fill: "#C3EBFA" },
    { name: "Group B", value: 8, fill: "#FAE27C" },
];

/**
 * Performance component displaying a semi-circle progress chart
 * @returns {JSX.Element} Performance card with progress visualization
 */
const Performance = () => {
    return (
        <Card className="h-80 relative">
            <CardHeader className="flex flex-row items-center justify-between p-4">
                <CardTitle className="text-lg font-semibold">Performance</CardTitle>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="h-[calc(100%-3.5rem)] p-0">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            paddingAngle={2}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-3xl font-bold">9.2</h1>
                    <p className="text-xs text-muted-foreground">of 10 max LTS</p>
                </div>

                <h2 className="font-medium absolute bottom-8 left-0 right-0 text-center text-sm text-muted-foreground">
                    1st Semester - 2nd Semester
                </h2>
            </CardContent>
        </Card>
    );
};

export default Performance;