/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { flexGrid } from '@/styles/grid';
import { Button, Typography } from 'nimble-nds';

import ExplaneCard from './subcomponents/ExplaneCard';
import PricingCard from './subcomponents/PricingCard';

import {
    contentWrapperSidePadding,
    introSectionStyle,
    introSectionImageStyle,
    mainSectionImageStyle
} from './landing.style';

import CONSTANT from './constants';

const Landing = () => (
    <main>
        <section
            css={css(
                flexGrid({
                    direction: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }),
                introSectionStyle,
                contentWrapperSidePadding
            )}
        >
            <div
                css={flexGrid({
                    direction: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '1.5rem'
                })}
            >
                <div>
                    <Typography
                        color="cyan300"
                        size="80px"
                        weight="lg"
                        value={`Nimble\nMeet !`}
                    />
                </div>
                <div
                    css={flexGrid({
                        direction: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '4rem'
                    })}
                >
                    <div>
                        <Typography
                            color="gray500"
                            size="20px"
                            weight="sm"
                            value={`빠르게 미팅을 시작하고, 아이디어를 공유해보세요.\nNimble은 어쩌구저쩌구 완벽합니다.`}
                        />
                    </div>
                    <div
                        css={flexGrid({
                            direction: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1.5rem'
                        })}
                    >
                        <Button
                            theme="link"
                            size="xl"
                            width="10rem"
                            fontSize="1.125rem"
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
                    </div>
                </div>
            </div>
            <div css={introSectionImageStyle} />
        </section>
        <article
            css={css(
                flexGrid({
                    direction: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4rem'
                }),
                {
                    height: '500px',
                    backgroundColor: 'black'
                },
                contentWrapperSidePadding
            )}
        >
            {CONSTANT.EXPLANE.map((data) => (
                <ExplaneCard
                    key={data?.title}
                    title={data?.title}
                    description={data?.description}
                />
            ))}
        </article>
        <article
            css={css(
                flexGrid({
                    direction: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }),
                {
                    backgroundColor: 'black'
                }
            )}
        >
            <div
                css={css(
                    flexGrid({
                        direction: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem'
                    }),
                    {
                        height: '300px',
                        backgroundColor: 'black'
                    },
                    contentWrapperSidePadding
                )}
            >
                <Typography
                    color="gray50"
                    size="48px"
                    weight="lg"
                    value={`We are compony that has created a\nmeeting platform for everyone`}
                />
            </div>
            <div css={mainSectionImageStyle} />
        </article>
        <article
            css={css(
                flexGrid({
                    direction: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }),
                {
                    backgroundColor: 'black'
                }
            )}
        >
            <div
                css={css(
                    flexGrid({
                        direction: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '1rem'
                    }),
                    {
                        height: '300px',
                        backgroundColor: 'black'
                    },
                    contentWrapperSidePadding
                )}
            >
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
            </div>
            <div
                css={css(
                    flexGrid({
                        direction: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '3rem'
                    }),
                    contentWrapperSidePadding
                )}
            >
                {CONSTANT.PRICING.map((pricing) => (
                    <PricingCard
                        key={pricing.type}
                        type={pricing.type}
                        description={pricing.description}
                        benefits={pricing.benefits}
                        price={pricing.price}
                        disabled={pricing.disabled}
                    />
                ))}
            </div>
        </article>
    </main>
);

export default Landing;
