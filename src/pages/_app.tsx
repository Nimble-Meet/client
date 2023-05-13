import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

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

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const token = Cookies.get('accessToken');

    React.useEffect(() => {
        if (!token && (Component as any).requireAuth) {
            router.push('/auth/signIn');
        }
    }, [router.pathname, token]);

    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </RecoilRoot>
    );
}
