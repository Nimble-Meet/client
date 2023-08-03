'use client';
import React from 'react';
import '@/styles/globals.css';

import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from '@/components/Error';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import '../assets/font/font.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: true,
            refetchOnWindowFocus: false,
            retry: 0,
            suspense: true
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
                <RecoilRoot>
                    <QueryClientProvider client={queryClient}>
                        <ErrorBoundary>
                            {children}
                            <Toaster />
                        </ErrorBoundary>
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </RecoilRoot>
            </body>
        </html>
    );
}
