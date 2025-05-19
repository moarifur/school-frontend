'use client';

import ClientLayout from '@/app/ClientLayout';

export default function HydrationBoundary({ children, defaultSidebarOpen }) {
    return <ClientLayout defaultSidebarOpen={defaultSidebarOpen}>{children}</ClientLayout>
}
