'use client'

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/common/AppSidebar";
import Navbar from "@/components/common/Navbar";

/**
 * ClientLayout wraps the authenticated/private section of the app.
 * It defines the overall UI structure and state providers for the admin dashboard.
 *
 * Features:
 * - ThemeProvider: Enables dark/light mode support and system preference detection.
 * - SidebarProvider: Manages open/close state for the sidebar across the app.
 * - AppSidebar: Persistent sidebar navigation (usually fixed on desktop).
 * - Navbar: Top navigation bar, typically includes user menu, notifications, etc.
 * - Proper HTML structure with full height layout and scrollable content.
 *
 * This layout should be used as a client component (e.g. for dashboards),
 * separated from the RootLayout that contains global fonts, metadata, etc.
 */
export default function ClientLayout({ children }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <div className="flex h-full w-full">
                    {/* Sidebar: visible on desktop, collapsible with SidebarTrigger */}
                    <AppSidebar />

                    {/* Main content area */}
                    <main className="flex-1 flex flex-col">
                        {/* Top Navbar */}
                        <Navbar />

                        {/* Scrollable page content */}
                        <div className="px-4 py-4 flex-1 overflow-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}
