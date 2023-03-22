/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pricingBoxContainerStyle = css`
    flex: 1;
    height: 500px;

    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-radius: 2rem;
    background-color: black;
    border: 2px solid #393939;

    margin-bottom: 6rem;
`;

export const pricingPlanStyle = css`
    height: 112px;
    border-bottom: 1px solid #393939;
    margin-bottom: 1rem;
`;

export const planBenefitsStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 2rem;
`;
