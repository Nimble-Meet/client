/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { Button, Typography, FlexContainer } from 'nimble-ds';

// emotion styles
import {
    pricingCardContainerStyle,
    pricingPlanStyle
} from './pricingCard.style';

type Props = {
    type: string;
    description: string;
    benefits: string[];
    price: number;
    disabled: boolean;
    moveMainPage: Function;
};

const PricingCard = ({
    type,
    description,
    benefits,
    price,
    disabled,
    moveMainPage
}: Props) => (
    <FlexContainer
        direction="column"
        justifyContent="start"
        alignItems="start"
        gap="1rem"
        grow={1}
        customCss={pricingCardContainerStyle}
    >
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
        <FlexContainer
            direction="column"
            justifyContent="start"
            alignItems="start"
            gap="1rem"
            customCss={css`
                margin-bottom: 2rem;
            `}
        >
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
        </FlexContainer>
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
        <Button
            size="lg"
            theme="link"
            disabled={disabled}
            fontSize="1rem"
            width="100%"
            onClick={
                moveMainPage as (
                    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => void
            }
        >
            {disabled ? 'Coming soon..' : 'Buy Now'}
        </Button>
    </FlexContainer>
);

export default PricingCard;
