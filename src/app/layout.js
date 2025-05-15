/**
 * Root layout component for the School Management System Admin Dashboard.
 * This file defines the global layout structure using Next.js App Router.
 *
 * Includes:
 * - Google fonts (Geist Sans and Mono)
 * - Global styles
 * - Persistent Sidebar and Navbar on all pages
 * - Proper HTML structure to prevent hydration errors
 */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/common/AppSidebar";
import Navbar from "@/components/common/Navbar";

// Load Geist Sans with CSS variable
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Load Geist Mono with CSS variable
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata = {
  title: "School Portal Management System",
  description: "A modern, secure, and scalable school portal designed for students, teachers, parents, staff, and administrators. Each user role has a personalized dashboard to view relevant data such as upcoming events, announcements, and activities.",
};

// The root layout component
export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
        {/* className="h-full" ensures full height layout support */}
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        {/* Wrap layout in a div to avoid direct whitespace in <body> and hydration errors */}
        <div className="flex h-full w-full">
            {/* Sidebar stays fixed on all pages */}
            <AppSidebar />

            {/* Main content area with full width minus sidebar */}
            <main className="flex-1 flex flex-col">
                {/* Navbar across the top */}
                <Navbar />

                {/* Page content */}
                <div className="px-4 py-4 flex-1 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
        </body>
        </html>
    );
}