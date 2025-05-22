import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Announcements = () => {
    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 h-6">
                    View All
                </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-4 pt-0">
                <div className="bg-blue-50 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <Badge variant="outline" className="text-xs text-gray-400">
                            2025-01-01
                        </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                        expedita. Rerum, quidem facilis?
                    </p>
                </div>

                <div className="bg-purple-50 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <Badge variant="outline" className="text-xs text-gray-400">
                            2025-01-01
                        </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                        expedita. Rerum, quidem facilis?
                    </p>
                </div>

                <div className="bg-yellow-50 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <Badge variant="outline" className="text-xs text-gray-400">
                            2025-01-01
                        </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                        expedita. Rerum, quidem facilis?
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default Announcements;