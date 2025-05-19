/**
 * Root layout component for the School Management System Admin Dashboard.
 *
 * This file defines the global layout structure using Next.js App Router
 * and integrates ShadCN's Sidebar context and theme provider.
 * ThemeProvider wraps your app and enables system-aware theme switching.
 * SidebarProvider manages sidebar open/close state across the app.
 *
 * Includes:
 * - Google fonts (Geist Sans and Mono)
 * - Global Tailwind styles
 * - Persistent Sidebar and Navbar
 * - Dark/light mode support via ThemeProvider
 * - Layout structure with proper HTML to avoid hydration mismatch
 */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ShadCN layout context
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// Custom layout components
import AppSidebar from "@/components/common/AppSidebar";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import {cookies} from "next/headers";

// Load Google Fonts with Tailwind-compatible CSS variable
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// SEO Metadata
export const metadata = {
    title: "School Portal Management System",
    description:
        "A modern, secure, and scalable school portal designed for students, teachers, parents, staff, and administrators. Each user role has a personalized dashboard to view relevant data such as upcoming events, announcements, and activities.",
};


// Root layout structure
export default async function RootLayout({ children }) {
    // Persisted State for Sidebar
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
    return (
        <html lang="en" className="h-full">
        {/* Use suppressHydrationWarning to help with dynamic class issues from ThemeProvider */}
        <body
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
        >
        {/* ThemeProvider wraps your app and enables system-aware theme switching. */}
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {/* SidebarProvider manages sidebar open/close state across the app. */}
            <SidebarProvider defaultOpen={defaultOpen}>
                <div className="flex h-full w-full">
                    {/* Sidebar component (always visible on desktop) */}
                    <AppSidebar />

                    {/* Main content container */}
                    <main className="flex-1 flex flex-col">
                        {/* Top Navbar */}
                        <Navbar />
                        {/* Page content */}
                        <div className="px-4 py-4 flex-1 overflow-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </SidebarProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
