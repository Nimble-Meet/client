import { css } from '@emotion/react';

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
