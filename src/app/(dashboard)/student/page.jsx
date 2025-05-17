"use client";

import React from "react";
import BigCalendar from "@/components/widgets/BigCalender";
import EventCalendar from "@/components/widgets/EventCalendar";
import Announcements from "@/components/widgets/Announcements";

/**
 * Student dashboard page
 *
 * Features:
 * - Main content shows a big calendar with schedule overview
 * - Sidebar includes an event calendar and announcements
 * - Responsive flex layout with sidebar and main content
 */
const StudentPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 p-4 space-y-8">
                <EventCalendar />
                <Announcements />
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6">
                <h1 className="text-xl font-semibold mb-4">Schedule (4A)</h1>
                <BigCalendar />
            </main>
        </div>
    );
};

export default StudentPage;
