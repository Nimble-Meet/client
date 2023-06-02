import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const pricingCardContainerStyle = css`
    flex: 1;

    min-width: 23rem; // 368px
    height: 31.25rem; // 500px

    padding: 1.5rem; // 24px

    border-radius: 2rem; // 32px

    background-color: ${COLOR.softBlack};
    border: 2px solid ${COLOR.gray900};

    box-shadow: 0px 0px 8px ${COLOR.gray900};
`;

export const pricingPlanStyle = css`
    width: 100%;
    height: 7rem; // 112px
    border-bottom: 1px solid ${COLOR.gray900};
    margin-bottom: 1rem;
`;
