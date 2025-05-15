/**
 * Root layout component for the School Management System Admin Dashboard.
 * Updated to follow ShadCN layout structure using SidebarProvider and SidebarTrigger.
 */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ShadCN components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// Your custom components
import AppSidebar from "@/components/common/AppSidebar";
import Navbar from "@/components/common/Navbar";

// Load Google Fonts with CSS variable
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Metadata for SEO
export const metadata = {
    title: "School Portal Management System",
    description:
        "A modern, secure, and scalable school portal designed for students, teachers, parents, staff, and administrators. Each user role has a personalized dashboard to view relevant data such as upcoming events, announcements, and activities.",
};

// Root layout
export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
        >
        <SidebarProvider>
            <div className="flex h-full w-full">
                {/* Persistent Sidebar */}
                <AppSidebar />

                {/* Main content */}
                <main className="flex-1 flex flex-col">
                    {/* Top Navbar */}
                    <Navbar />

                    {/* Sidebar trigger for mobile or collapsible toggles */}
                    <div className="p-2">
                        <SidebarTrigger />
                    </div>

                    {/* Page Content */}
                    <div className="px-4 py-4 flex-1 overflow-auto">
                        {children}
                    </div>
                </main>
            </div>
        </SidebarProvider>
        </body>
        </html>
    );
}
