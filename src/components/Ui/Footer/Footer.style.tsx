import { css } from '@emotion/react';
import COLOR from '@/common/color';

export const footerStyle = css`
    display: flex;
    justify-content: center;

    background-color: ${COLOR.softBlack};
    height: 10rem;
    width: 100%;

    padding: 1rem 8rem;

    border-top: 1px solid #181818;
`;

export const footerContentsStyle = css`
    width: 1200px;
`;
