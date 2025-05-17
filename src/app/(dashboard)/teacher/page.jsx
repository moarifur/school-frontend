"use client";

import React from "react";
import BigCalendar from "@/components/widgets/BigCalender";
import Announcements from "@/components/widgets/Announcements";

/**
 * Teacher dashboard page
 *
 * Features:
 * - Main section shows the teacher's schedule in a big calendar
 * - Sidebar displays announcements only
 * - Layout uses flexbox with sidebar and main content
 */
const TeacherPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 p-4">
                <Announcements />
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6">
                <h1 className="text-xl font-semibold mb-4">Schedule</h1>
                <BigCalendar />
            </main>
        </div>
    );
};

export default TeacherPage;
