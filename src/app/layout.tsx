'use client';
import React from 'react';
import '@/styles/globals.css';

import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from '@/components/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

import '../assets/font/font.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: true,
            refetchOnWindowFocus: false,
            retry: 0,
            suspense: true,
            staleTime: 1000 * 60 * 5
        }
    }
});

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head />
            <body>
                <QueryClientProvider client={queryClient}>
                    <RecoilRoot>
                        <ErrorBoundary>
                            {children}
                            <Toaster />
                        </ErrorBoundary>
                        <ReactQueryDevtools initialIsOpen={false} />
                    </RecoilRoot>
                </QueryClientProvider>
            </body>
        </html>
    );
}
