/** @jsxImportSource @emotion/react */
import React from 'react';
import { useRouter } from 'next/router';

import { css } from '@emotion/react';

import { Button, Typography, FlexContainer } from 'nimble-nds';

import ExplaneCard from './subcomponents/ExplaneCard';
import PricingCard from './subcomponents/PricingCard';

// emotion styles
import {
    landingStyle,
    introSectionImageStyle,
    mainSectionImageStyle
} from './landing.style';

import CONSTANT from './constants';

const Landing = () => {
    const router = useRouter();

    const moveMainPage = () => {
        router.push('/login');
    };

    return (
        <main css={landingStyle}>
            <FlexContainer
                direction="row"
                justifyContent="between"
                alignItems="center"
                customCss={css`
                    height: 80vh;
                `}
            >
                <FlexContainer
                    direction="column"
                    justifyContent="center"
                    alignItems="start"
                    gap="1.5rem"
                >
                    <div>
                        <Typography
                            color="cyan300"
                            size="80px"
                            weight="lg"
                            value={`Nimble\nMeet !`}
                        />
                    </div>
                    <FlexContainer
                        direction="column"
                        justifyContent="center"
                        alignItems="start"
                        gap="4rem"
                    >
                        <div>
                            <Typography
                                color="gray500"
                                size="20px"
                                weight="sm"
                                value={`빠르게 미팅을 시작하고, 아이디어를 공유해보세요.\nNimble은 어쩌구저쩌구 완벽합니다.`}
                            />
                        </div>
                        <FlexContainer
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            gap="1.5rem"
                        >
                            <Button
                                theme="link"
                                size="xl"
                                width="10rem"
                                fontSize="1.125rem"
                                onClick={moveMainPage}
                            >
                                Get Start
                            </Button>
                            <Button
                                theme="dark"
                                size="xl"
                                width="10rem"
                                fontSize="1rem"
                            >
                                Learn More
                            </Button>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
                <div css={introSectionImageStyle} />
            </FlexContainer>
            <FlexContainer
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="4rem"
                customCss={css`
                    height: 500px;
                `}
            >
                {CONSTANT.EXPLANE.map((data) => (
                    <ExplaneCard
                        key={data?.title}
                        title={data?.title}
                        description={data?.description}
                    />
                ))}
            </FlexContainer>
            <FlexContainer
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <FlexContainer
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="1rem"
                    customCss={css`
                        height: 300px;
                    `}
                >
                    <Typography
                        color="gray50"
                        size="48px"
                        weight="lg"
                        value={`We are compony that has created a\nmeeting platform for everyone`}
                    />
                </FlexContainer>
                <div css={mainSectionImageStyle} />
            </FlexContainer>
            <FlexContainer
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <FlexContainer
                    direction="column"
                    justifyContent="center"
                    alignItems="start"
                    gap="1rem"
                    customCss={css`
                        width: 100%;
                        height: 300px;
                    `}
                >
                    {' '}
                    <Typography
                        color="gray50"
                        size="60px"
                        weight="lg"
                        value="Our Pricing"
                    />
                    <Typography
                        color="gray500"
                        size="24px"
                        weight="lg"
                        value={`We offer favorable conditions for your\ncomfotable and productive work.`}
                    />
                </FlexContainer>
                <FlexContainer
                    direction="row"
                    justifyContent="center"
                    alignItems="start"
                    gap="3rem"
                    customCss={css`
                        width: 100%;
                    `}
                >
                    {CONSTANT.PRICING.map((pricing) => (
                        <PricingCard
                            key={pricing.type}
                            type={pricing.type}
                            description={pricing.description}
                            benefits={pricing.benefits}
                            price={pricing.price}
                            disabled={pricing.disabled}
                            moveMainPage={moveMainPage}
                        />
                    ))}
                </FlexContainer>
            </FlexContainer>
        </main>
    );
};

export default Landing;
