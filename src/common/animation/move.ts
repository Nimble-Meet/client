import { css } from '@emotion/react';

export const smoothVertical = (value: string) => {
    const animationName = `vertical-${value}`;

    return css`
        @keyframes ${animationName} {
            0% {
                transform: translateY(${value});
                opacity: 0.3;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }

        animation: ${animationName} 0.8s ease-in-out forwards;
    `;
};

export const smoothHorizontal = (value: string) => {
    const animationName = `horizontal-${value}`;

    return css`
        @keyframes ${animationName} {
            0% {
                transform: translateX(${value});
                opacity: 0.3;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }

        animation: ${animationName} 0.8s ease-in-out forwards;
    `;
};
