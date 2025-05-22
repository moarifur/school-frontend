"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"
import { Badge } from "@/components/ui/badge"

/**
 * Simplified UserCard Component
 *
 * Displays a statistic card with:
 * - Year badge
 * - Count number
 * - Type label
 * - Options menu
 *
 * @param {string} type - The type to display (e.g., "user")
 * @param {number} [count=1234] - The number to show
 * @param {string} [year="2024/25"] - Year for the badge
 */
const UserCard = ({ type, count = 1234, year = "2024/25" }) => {
    return (
        <Card className="
      rounded-xl
      odd:bg-[#CFCEFF] even:bg-[#FAE27C]
      p-4
      w-full
      min-w-[150px]
      shadow-sm
      hover:shadow-md
      transition-all
    ">
            {/* Header with badge and menu */}
            <CardHeader className="p-0 mb-0">
                <div className="flex justify-between items-center">
                    <Badge variant="outline" className="bg-white text-green-600">
                        {year}
                    </Badge>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="p-1 hover:bg-white/80 rounded">
                            <Ellipsis className="text-white" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>View</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>

            {/* Main content */}
            <CardContent className="p-0">
                <h1 className="text-2xl font-semibold mb-2">
                    {count.toLocaleString()}
                </h1>
                <p className="text-sm text-gray-500 capitalize">
                    {type}s
                </p>
            </CardContent>
        </Card>
    )
}

export default UserCard