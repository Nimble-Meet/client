import React from 'react';
import useMediaQuery from './useMediaQuery';

type Token = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface MediaQueryResultWithToken {
    [key: string]: boolean;
}

const gridBreakpoints = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1440,
    xxl: 1920
};

const useMediaQueryWithToken = (token: Token): MediaQueryResultWithToken => {
    const [isDown, setIsDown] = React.useState(false);

    const isCurrentDown = useMediaQuery(
        `(max-width: ${gridBreakpoints[token] - 1}px)`
    );

    React.useEffect(() => {
        setIsDown(isCurrentDown);
    }, [isCurrentDown]);

    const newToken = token.replace(/^[a-z]/, (char) => char.toUpperCase());

    return {
        [`is${newToken}Up`]: !isDown,
        [`is${newToken}Down`]: isDown
    };
};

export default useMediaQueryWithToken;
