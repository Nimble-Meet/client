'use client';
import { css } from '@emotion/react';

// common
import COLOR from '@/common/color';

// react-icon
import { BsCheck } from 'react-icons/bs';
import { TbCurrencyDollar } from 'react-icons/tb';

// hooks
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

// components
import { Button, Typography, FlexContainer } from 'nimble-ds';

// emotion
import {
    pricingCardContainerStyle,
    pricingPlanStyle
} from './PricingCard.style';

// animation
import { smoothVertical, smoothHorizontal } from '@/common/animation/move';
import { opacityZeroToHundred } from '@/common/animation/opacity';

import type { Props } from './PricingCard.type';

const PricingCard = ({
    type,
    description,
    benefits,
    price,
    disabled,
    animationDelay,
    moveMainPage
}: Props.PricingCard) => {
    const { targetRef: titleRef, isIntersecting: titleInterscting } =
        useIntersectionObserver(0);

    const {
        targetRef: descriptionRef,
        isIntersecting: descriptionInterscting
    } = useIntersectionObserver(0);

    const { targetRef: benefitsRef, isIntersecting: benefitsInterscting } =
        useIntersectionObserver(0);

    return (
        <FlexContainer
            direction="column"
            gap="1rem"
            grow={1}
            customCss={pricingCardContainerStyle}
        >
            <div
                css={[
                    pricingPlanStyle,
                    css`
                        display: flex;
                        flex-direction: column;
                        gap: 0.25rem;
                        animation-delay: ${animationDelay}s !important;
                    `
                ]}
            >
                <div
                    ref={titleRef}
                    css={titleInterscting && smoothVertical('-1rem')}
                >
                    <Typography
                        color="gray50"
                        size="40px"
                        weight="lg"
                        value={type}
                    />
                </div>
                <div
                    ref={descriptionRef}
                    css={descriptionInterscting && opacityZeroToHundred}
                >
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
                gap="1rem"
                ref={benefitsRef}
                customCss={[
                    css`
                        margin-bottom: 2rem;
                    `,
                    benefitsInterscting ? smoothHorizontal('-1rem') : css``
                ]}
            >
                {benefits.map((benefit, i) => (
                    <div
                        key={i}
                        css={css`
                            display: flex;
                            gap: 0.25rem;
                        `}
                    >
                        <BsCheck color={COLOR.gray600} size="1.5rem" />
                        <Typography
                            color="gray300"
                            size="18px"
                            weight="md"
                            value={`${benefit}`}
                        />
                    </div>
                ))}
            </FlexContainer>
            <div
                css={css`
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                `}
            >
                <TbCurrencyDollar color={COLOR.gray600} size="2rem" />
                <Typography
                    color="gray50"
                    size="32px"
                    weight="lg"
                    value={price}
                />
                <Typography
                    color="gray500"
                    size="24px"
                    weight="lg"
                    value="/ month"
                />
            </div>
            <Button
                size="lg"
                color="link"
                disabled={disabled}
                fontSize="1rem"
                width="100%"
                onClick={moveMainPage}
                round
            >
                {disabled ? 'Coming soon' : '시작하기'}
            </Button>
        </FlexContainer>
    );
};

export default PricingCard;
