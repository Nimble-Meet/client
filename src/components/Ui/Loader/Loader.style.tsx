import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const loaderStyle = css`
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    position: fixed;
    top: 50%;
    left: 50%;

    border: 0.25rem solid #f3f3f3; /* Light grey */
    border-top: 0.25rem solid ${COLOR.gray400};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    animation: spin 1.5s linear infinite;
`;
