/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { Button, Typography } from 'nimble-nds';

const PricingBoxStyle = css`
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

const container = css`
    height: 112px;
    border-bottom: 1px solid #393939;
    margin-bottom: 1rem;
`;

const benefitsStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 2rem;
`;

type Props = {
    type: string;
    description: string;
    benefits: string[];
    price: number;
    disabled: boolean;
};

const PricingBox = ({
    type,
    description,
    benefits,
    price,
    disabled
}: Props) => (
    <div css={PricingBoxStyle}>
        <div css={container}>
            <div>
                <Typography
                    color="gray50"
                    size="40px"
                    weight="lg"
                    value={type}
                />
            </div>
            <div>
                <Typography
                    color="gray500"
                    size="16px"
                    weight="lg"
                    value={description}
                />
            </div>
        </div>
        <div css={benefitsStyle}>
            {benefits.map((benefit) => (
                <div key={benefit}>
                    <Typography
                        color="gray300"
                        size="20px"
                        weight="md"
                        value={`✔️ ${benefit}`}
                    />
                </div>
            ))}
        </div>
        <div>
            <Typography
                color="gray50"
                size="32px"
                weight="lg"
                value={`$ ${price} `}
            />
            <Typography
                color="gray500"
                size="20px"
                weight="lg"
                value="/month"
            />
        </div>
        <Button size="lg" theme="link" disabled={disabled} fontSize="1rem">
            {disabled ? 'Coming soon..' : 'Buy Now'}
        </Button>
    </div>
);

export default PricingBox;
