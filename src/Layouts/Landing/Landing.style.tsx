import { css } from '@emotion/react';

export const landingStyle = css`
    width: 100%;
    padding-right: 12rem;
    padding-left: 12rem;

    background-color: black;

    @media (max-width: 1440px) {
        padding-right: 6rem;
        padding-left: 6rem;
    }
`;

export const introSectionImageStyle = css`
    width: 600px;
    height: 400px;

    background-color: blue;

    @media (max-width: 1440px) {
        width: 504px;
        height: 336px;
    }
`;

export const mainSectionImageStyle = css`
    width: 800px;
    height: 500px;

    background-color: blue;

    @media (max-width: 1440px) {
        padding-right: 8rem;
        padding-left: 8rem;
    }
`;
