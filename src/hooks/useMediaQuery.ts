import React from 'react';

const useMediaQuery = (query: string) => {
    const getMatches = (queryData: string) => {
        // Prevents SSR issues
        if (typeof window !== 'undefined') {
            return window.matchMedia(queryData).matches;
        }
        return false;
    };

    const [matches, setMatches] = React.useState(getMatches(query));

    function handleChange() {
        setMatches(getMatches(query));
    }

    React.useEffect(() => {
        const matchMedia = window.matchMedia(query);

        handleChange();

        matchMedia.addEventListener('change', handleChange);

        return () => {
            matchMedia.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;
