import { css } from '@emotion/react';

export const layoutStyle = css`
    min-width: 64rem; // 1024px
    max-width: 100rem; // 1600px

    margin: 0 auto;
    background-color: white;

    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.15);
`;

export const mainStyle = css`
    width: 100%;
    box-shadow: -0.15rem 0 0.2rem -0.15rem rgba(0, 0, 0, 0.15);
`;

export const sectionStyle = css`
    @media (max-width: 1200px) {
        flex-direction: column !important;
    }
`;

export const meetingSectionStyle = css`
    width: 75%;
    height: 100%;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const infoSectionStyle = css`
    width: 25%;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;
