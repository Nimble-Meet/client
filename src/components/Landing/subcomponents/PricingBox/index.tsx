/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import {
    pricingBoxContainerStyle,
    pricingPlanStyle,
    planBenefitsStyle
} from '@/styles/pricingBox.style';

import { Button, Typography } from 'nimble-nds';

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
    <div css={pricingBoxContainerStyle}>
        <div css={pricingPlanStyle}>
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
        <div css={planBenefitsStyle}>
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
