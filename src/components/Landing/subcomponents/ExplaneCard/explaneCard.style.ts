/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const explaneCardStyle = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 300px;

    padding: 2rem;

    position: relative;

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
