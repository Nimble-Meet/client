/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const explaneCardStyle = css`
    position: relative;
    height: 300px;

    padding: 2rem;

    border-radius: 2rem;
    background-color: black;
    border: 2px solid ${COLOR.gray900};
`;

export const introIconStyle = css`
    height: 100px;
    width: 100px;

    border-radius: 1rem;
    background-color: ${COLOR.gray900};
    border: none;
`;
