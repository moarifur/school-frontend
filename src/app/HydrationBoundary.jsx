'use client';

import ClientLayout from '@/app/ClientLayout';

export default function HydrationBoundary({ children }) {
    return <ClientLayout>{children}</ClientLayout>;
}
