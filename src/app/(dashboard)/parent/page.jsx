"use client";

import React from "react";
import BigCalendar from "@/components/widgets/BigCalender";
import Announcements from "@/components/widgets/Announcements";

/**
 * Parent dashboard page
 *
 * Features:
 * - Displays child's schedule in the main calendar view
 * - Sidebar contains announcements
 * - Responsive layout with sidebar and main content using flexbox
 */
const ParentPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 p-4">
                <Announcements />
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6">
                <h1 className="text-xl font-semibold mb-4">Schedule (John Doe)</h1>
                <BigCalendar />
            </main>
        </div>
    );
};

export default ParentPage;
