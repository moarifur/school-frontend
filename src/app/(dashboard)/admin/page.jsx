"use client"; // Directive for Next.js App Router to treat this as a client component

import React from "react";
// Import reusable components for dashboard widgets
import UserCard from "@/components/widgets/UserCard"; // Displays a card for different user roles
import CountChart from "@/components/widgets/CountChart"; // Displays a count-based chart
import AttendanceChart from "@/components/widgets/AttendanceChart"; // Displays attendance data
import FinanceChart from "@/components/widgets/FinanceChart"; // Displays financial data
import EventCalendar from "@/components/widgets/EventCalendar"; // Displays events in calendar format
import Announcements from "@/components/widgets/Announcements"; // Displays latest announcements

/**
 * DashboardPage
 *
 * This is the main admin dashboard component.
 * It shows:
 * - A quick summary of user roles (Student, Teacher, Parent, Staff)
 * - Charts for metrics like count overview and attendance
 * - Financial overview in a graph
 * - A calendar with events
 * - Latest announcements
 *
 * Layout is divided into two main parts:
 * - LEFT PANEL: Main content (2/3 width on large screens)
 * - RIGHT PANEL: Sidebar (1/3 width on large screens)
 */

const DashboardPage = () => {
    return (
        <main className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/*============= LEFT PANEL:: Spans 2 columns on large screens. Contains: User role cards, charts, and finance data. =============*/}
            <section className="lg:col-span-2 space-y-8">
                {/*============= User Roles Overview:: Displays 4 cards representing each type of user role =============*/}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <UserCard type="student" count={1560} /> {/* Student count and info */}
                    <UserCard type="teacher" count={45}/> {/* Teacher count and info */}
                    <UserCard type="parent" count={32}/>  {/* Parent count and info */}
                    <UserCard type="staff" count={1280}/>   {/* Staff count and info */}
                </div>

                {/*============= Charts Overview:: Left: Count chart | Right: Attendance overview =============*/}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[450px]">
                    <div className="lg:col-span-1">
                        <CountChart /> {/* Shows counts for different metrics */}
                    </div>
                    <div className="lg:col-span-2">
                        <AttendanceChart /> {/* Shows attendance trends */}
                    </div>
                </div>

                {/*============= Financials Overview:: Full-width section showing income, expenses, etc. =============*/}
                <div className="h-[500px]">
                    <FinanceChart /> {/* Shows financial metrics and trends */}
                </div>
            </section>

            {/*============= RIGHT PANEL:: Sidebar with event calendar and announcements. Stacks vertically with spacing between widgets. =============*/}
            <aside className="space-y-8">
                <EventCalendar /> {/* Interactive calendar of upcoming events */}
                <Announcements /> {/* List of recent announcements or notices */}
            </aside>
        </main>
    );
};

export default DashboardPage;
