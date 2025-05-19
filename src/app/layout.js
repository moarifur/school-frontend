/**
 * ===============================
 * Root Layout: layout.js (App Router)
 * ===============================
 *
 * Purpose:
 * This is the top-level layout for the entire Next.js application.
 * It defines the global structure, fonts, CSS, and hydration-safe HTML.
 *
 * Key Features:
 * - Loads and applies Google fonts using Next.js `next/font/google`.
 * - Applies global Tailwind CSS styles.
 * - Wraps children in a hydration-safe boundary to prevent common SSR/CSR mismatches.
 * - Prevents hydration mismatch errors using `suppressHydrationWarning`.
 *
 * Why This Matters:
 * Next.js uses Server Components (SSR) and Client Components (CSR) together.
 * A mismatch between HTML rendered on the server and what React expects on the client
 * (due to themes, dynamic content, browser-only conditions) can cause hydration errors.
 * This layout is designed to handle those safely.
 */

import { Geist, Geist_Mono } from "next/font/google"; // Importing fonts optimized by Next.js
import "./globals.css"; // Global Tailwind styles (important for layout and consistency)
import HydrationBoundary from "@/app/HydrationBoundary"; // Custom component to isolate dynamic hydration-sensitive logic

/**
 * Load and configure Google Fonts using next/font.
 * This helps avoid layout shifts and supports Tailwind’s `font-variable` usage.
 */
const geistSans = Geist({
    variable: "--font-geist-sans", // Exposes the font as a CSS variable
    subsets: ["latin"], // Optimize for Latin character sets
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

/**
 * Metadata for the entire application.
 * Next.js will inject this into the <head> for better SEO and social previews.
 */
export const metadata = {
    title: "School Portal Management System",
    description: "A modern, secure, and scalable school portal...",
};

/**
 * Root layout component — wraps the entire app.
 *
 * @param {React.ReactNode} children - All nested pages/components rendered within the app.
 */
export default function RootLayout({ children }) {
    return (
        /**
         * <html> tag is rendered once and used globally.
         * - `lang="en"` improves accessibility and SEO.
         * - `suppressHydrationWarning` avoids hydration errors caused by differences
         *   between server-rendered and client-rendered HTML (like theme switching).
         */
        <html lang="en" suppressHydrationWarning>
        {/**
         * <body> applies global fonts using Tailwind's CSS variable pattern.
         * - `h-full` ensures the body takes full height for 100vh layouts.
         * - `antialiased` makes font rendering smoother.
         */}
        <body
            className={`h-full ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/**
         * HydrationBoundary is a wrapper component (you define it).
         * Purpose: isolate dynamic client-only logic or UI (e.g., theme switching)
         * to avoid React hydration errors and let the layout remain SSR-safe.
         */}
        <HydrationBoundary>
            {children}
        </HydrationBoundary>
        </body>
        </html>
    );
}
