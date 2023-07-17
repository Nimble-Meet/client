'use client';
import React from 'react';
import { css } from '@emotion/react';

// common
import COLOR from '@/common/color';

// hooks
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

// components
import { Typography, FlexContainer } from 'nimble-ds';

// emotion
import { explaneCardStyle, introIconStyle } from './ExplaneCard.style';

// animation
import {
    opacityToHundred,
    opacityZeroToHundred
} from '@/common/animation/opacity';
import { imageSizeUp } from '@/common/animation/size';

import type { Props } from './ExplaneCard.type';

const ExplaneCard = ({
    title,
    description,
    icon,
    trasitionDelay
}: Props.ExplaneCard) => {
    const Icon = icon;

    const { targetRef: imageRef, isIntersecting: imageInterscting } =
        useIntersectionObserver(0);

    const { targetRef: titleRef, isIntersecting: titleInterscting } =
        useIntersectionObserver(0);

    React.useEffect(() => {
        if (imageInterscting && imageRef.current) {
            imageRef.current.style.transform = 'scale(1)';
        } else if (imageRef.current) {
            imageRef.current.style.transform = 'scale(0.8)';
        }
    }, [imageInterscting]);

    const {
        targetRef: descriptionRef,
        isIntersecting: descriptionInterscting
    } = useIntersectionObserver(0);

    return (
        <FlexContainer
            direction="column"
            gap="1rem"
            grow={1}
            customCss={[explaneCardStyle]}
        >
            <div
                ref={imageRef}
                css={[
                    introIconStyle,
                    imageInterscting && imageSizeUp,
                    css`
                        transition-delay: ${trasitionDelay}s !important;
                    `
                ]}
            >
                <Icon color={COLOR.gray50} size="48px" />
            </div>
            <div ref={titleRef} css={titleInterscting && opacityToHundred}>
                <Typography
                    color="gray50"
                    size="24px"
                    weight="lg"
                    value={title}
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
        </FlexContainer>
    );
};

export default ExplaneCard;
