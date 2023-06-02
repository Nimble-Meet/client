import { css } from '@emotion/react';
import COLOR from '@/common/color';

export const landingStyle = css`
    display: flex;
    justify-content: center;

    width: 100%;
    padding-right: 12rem;
    padding-left: 12rem;

    background-color: ${COLOR.softBlack};

    @media (max-width: 1440px) {
        padding-right: 8rem;
        padding-left: 8rem;
    }
`;

export const landingContentsStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1200px;

    gap: 12rem;
`;

export const introSectionImageStyle = css`
    width: 600px;
    height: 400px;

    background-color: ${COLOR.softBlack};
    border-radius: 4rem;
    border: 2px solid ${COLOR.gray900};
    box-shadow: 0px 0px 40px ${COLOR.gray900};

    @media (max-width: 1440px) {
        width: 504px;
        height: 336px;
    }
`;
