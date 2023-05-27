import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (
    threshold: number = 0.5,
    rootMargin: string = '0px'
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const options: IntersectionObserverInit = {
            threshold,
            rootMargin
        };

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [threshold, rootMargin]);

    return { targetRef, isIntersecting };
};

export default useIntersectionObserver;
