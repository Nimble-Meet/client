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

export const opacityToHundred = css`
    @keyframes fadeIn {
        0% {
            opacity: 0.3;
        }
        100% {
            opacity: 1;
        }
    }

    animation: fadeIn 0.8s ease-in-out forwards;
`;

export const opacityZeroToHundred = css`
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    animation: fadeIn 1s ease-in-out forwards;
`;

export const imageSizeUp = css`
    transform: scale(0.8);
    transition: transform 0.5s ease-in-out;
`;
