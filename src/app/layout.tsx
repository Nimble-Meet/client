'use client';

import React from 'react';
import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import '../assets/font/font.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
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
                        {children}
                    </QueryClientProvider>
                </RecoilRoot>
            </body>
        </html>
    );
}
