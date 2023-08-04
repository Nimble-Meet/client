'use client';
import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

// components
import { ErrorFallback } from '@/components/Error';

interface Props {
    children: React.ReactNode;
    fallbackRender?: (props: {
        error: Error;
        resetErrorBoundary: () => void;
    }) => React.ReactNode;
    fallback?: any;
    onError?: (error: Error, info: { componentStack: string }) => void;
    onReset?: () => void;
}

const ErrorBoundary = ({
    children,
    fallbackRender = ErrorFallback,
    fallback,
    onError = (error, info) => {
        // 추후 에러 로깅 로직 작성
        console.log({ error, info });
    },
    onReset
}: Props) => {
    return (
        <ReactErrorBoundary
            fallbackRender={fallbackRender}
            fallback={fallback}
            onError={onError}
            onReset={onReset}
        >
            {children}
        </ReactErrorBoundary>
    );
};

export default ErrorBoundary;
