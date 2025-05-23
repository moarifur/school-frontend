"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Calendar Events Data
 * Contains weekly schedule for May 26-30, 2025 (Monday-Friday)
 * Each event has:
 * - title: Subject name
 * - allDay: false (since we're using timed events)
 * - start: Date object with start time
 * - end: Date object with end time
 * Note: Month is 0-indexed (4 = May)
 */
const calendarEvents = [
    // Monday Schedule
    { title: "Math", allDay: false, start: new Date(2025, 4, 26, 8, 0), end: new Date(2025, 4, 26, 8, 45) },
    { title: "English", allDay: false, start: new Date(2025, 4, 26, 9, 0), end: new Date(2025, 4, 26, 9, 45) },
    { title: "Biology", allDay: false, start: new Date(2025, 4, 26, 10, 0), end: new Date(2025, 4, 26, 10, 45) },
    { title: "Physics", allDay: false, start: new Date(2025, 4, 26, 11, 0), end: new Date(2025, 4, 26, 11, 45) },
    { title: "Chemistry", allDay: false, start: new Date(2025, 4, 26, 13, 0), end: new Date(2025, 4, 26, 13, 45) },
    { title: "History", allDay: false, start: new Date(2025, 4, 26, 14, 0), end: new Date(2025, 4, 26, 14, 45) },

    // Tuesday Schedule
    { title: "English", allDay: false, start: new Date(2025, 4, 27, 9, 0), end: new Date(2025, 4, 27, 9, 45) },
    { title: "Biology", allDay: false, start: new Date(2025, 4, 27, 10, 0), end: new Date(2025, 4, 27, 10, 45) },
    { title: "Physics", allDay: false, start: new Date(2025, 4, 27, 11, 0), end: new Date(2025, 4, 27, 11, 45) },
    { title: "History", allDay: false, start: new Date(2025, 4, 27, 14, 0), end: new Date(2025, 4, 27, 14, 45) },

    // Wednesday Schedule
    { title: "Math", allDay: false, start: new Date(2025, 4, 28, 8, 0), end: new Date(2025, 4, 28, 8, 45) },
    { title: "Biology", allDay: false, start: new Date(2025, 4, 28, 10, 0), end: new Date(2025, 4, 28, 10, 45) },
    { title: "Chemistry", allDay: false, start: new Date(2025, 4, 28, 13, 0), end: new Date(2025, 4, 28, 13, 45) },
    { title: "History", allDay: false, start: new Date(2025, 4, 28, 14, 0), end: new Date(2025, 4, 28, 14, 45) },

    // Thursday Schedule
    { title: "English", allDay: false, start: new Date(2025, 4, 29, 9, 0), end: new Date(2025, 4, 29, 9, 45) },
    { title: "Biology", allDay: false, start: new Date(2025, 4, 29, 10, 0), end: new Date(2025, 4, 29, 10, 45) },
    { title: "Physics", allDay: false, start: new Date(2025, 4, 29, 11, 0), end: new Date(2025, 4, 29, 11, 45) },
    { title: "History", allDay: false, start: new Date(2025, 4, 29, 14, 0), end: new Date(2025, 4, 29, 14, 45) },

    // Friday Schedule
    { title: "Math", allDay: false, start: new Date(2025, 4, 30, 8, 0), end: new Date(2025, 4, 30, 8, 45) },
    { title: "English", allDay: false, start: new Date(2025, 4, 30, 9, 0), end: new Date(2025, 4, 30, 9, 45) },
    { title: "Physics", allDay: false, start: new Date(2025, 4, 30, 11, 0), end: new Date(2025, 4, 30, 11, 45) },
    { title: "Chemistry", allDay: false, start: new Date(2025, 4, 30, 13, 0), end: new Date(2025, 4, 30, 13, 45) },
    { title: "History", allDay: false, start: new Date(2025, 4, 30, 14, 0), end: new Date(2025, 4, 30, 14, 45) }
];

// Setup moment localizer for react-big-calendar
const localizer = momentLocalizer(moment);

/**
 * BigCalendar Component
 * Displays a weekly schedule with work week (Mon-Fri) and day view options
 * Features:
 * - Interactive calendar with time slots
 * - View toggle between work week and single day
 * - Responsive design
 * - Custom time window (7AM-6PM)
 */
const BigCalendar = () => {
    const [view, setView] = useState("work_week"); // Default to work week view

    // Handle view change between work week and day views
    const handleOnChangeView = (selectedView) => {
        setView(selectedView);
    };

    return (
        <Card className="p-4 h-full">
            {/* Custom Calendar Styles */}
            <style jsx global>{`
                .rbc-day-slot {
                    font-size: 14px !important;
                }
                .rbc-event {
                    border: none !important;
                    color: black !important;
                    padding: 10px !important;
                    margin: 10px !important;
                    width: 99% !important;
                }
                .rbc-event:nth-child(1) { background-color: #e2f8ff !important; }
                .rbc-event:nth-child(2) { background-color: #fefce8 !important; }
                .rbc-event:nth-child(3) { background-color: #f2f1ff !important; }
                .rbc-event:nth-child(4) { background-color: #fdf2fb !important; }
                .rbc-event:nth-child(5) { background-color: #e2f8ff !important; }
                .rbc-event:nth-child(6) { background-color: #fefce8 !important; }
                .rbc-event:nth-child(7) { background-color: #f2f1ff !important; }
                .rbc-event:nth-child(8) { background-color: #fdf2fb !important; }
                .rbc-event-label {
                    color: gray !important;
                    margin-bottom: 5px !important;
                }
            `}</style>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Calendar</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            {view === "work_week" ? "Work Week" : "Day"} View
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => handleOnChangeView("work_week")}>
                            Work Week
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleOnChangeView("day")}>
                            Day
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Calendar Container */}
            <div className="h-[calc(100%-60px)]">
                <Calendar
                    localizer={localizer}
                    events={calendarEvents}
                    startAccessor="start"
                    endAccessor="end"
                    views={["work_week", "day"]}
                    view={view}
                    style={{ height: "100%" }}
                    onView={handleOnChangeView}
                    min={new Date(2025, 4, 26, 8, 0, 0)}  // 7:00 AM
                    max={new Date(2025, 4, 26, 18, 0, 0)}  // 6:00 PM
                    defaultDate={new Date(2025, 4, 26)}    // Default to May 26, 2025
                />
            </div>
        </Card>
    );
};

export default BigCalendar;