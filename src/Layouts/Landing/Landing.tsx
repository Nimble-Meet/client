import Image from 'next/image';
import { useRouter } from 'next/router';

import { css } from '@emotion/react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { Button, Typography, FlexContainer } from 'nimble-ds';

import ExplaneCard from './subcomponents/ExplaneCard';
import PricingCard from './subcomponents/PricingCard';

// emotion styles
import {
    landingStyle,
    landingContentsStyle,
    introSectionImageStyle
} from './Landing.style';

// animation styles
import { smoothVertical, smoothHorizontal } from './Landing.animate';

import CONSTANT from './constants';

const Landing = () => {
    const {
        targetRef: descriptionRef,
        isIntersecting: descriptionIntersecting
    } = useIntersectionObserver(0);

    const { targetRef: buttonRef, isIntersecting: buttonIntersecting } =
        useIntersectionObserver(0);

    const { targetRef: mainImageRef, isIntersecting: mainImageIntersecting } =
        useIntersectionObserver(0);

    const { targetRef: mottoRef, isIntersecting: mottoIntersecting } =
        useIntersectionObserver(1);

    const {
        targetRef: sectionImageRef,
        isIntersecting: sectionImageIntersecting
    } = useIntersectionObserver(0);

    const { targetRef: priceRef, isIntersecting: priceIntersecting } =
        useIntersectionObserver(1);

    const {
        targetRef: priceDescriptionRef,
        isIntersecting: priceDescriptionIntersecting
    } = useIntersectionObserver();

    const router = useRouter();

    const moveMainPage = () => {
        router.push('/auth/signIn');
    };

    return (
        <main css={landingStyle}>
            <div css={landingContentsStyle}>
                <FlexContainer
                    direction="row"
                    justifyContent="between"
                    alignItems="center"
                    customCss={css`
                        width: 100%;
                        height: 400px;
                        margin-top: 10rem;
                    `}
                >
                    <FlexContainer
                        direction="column"
                        justifyContent="center"
                        alignItems="start"
                        gap="1.5rem"
                    >
                        <Typography
                            color="blue600"
                            size="80px"
                            weight="lg"
                            value={`Nimble\nMeet !`}
                        />
                        <FlexContainer
                            direction="column"
                            justifyContent="center"
                            alignItems="start"
                            gap="4rem"
                        >
                            <div
                                ref={descriptionRef}
                                css={
                                    descriptionIntersecting &&
                                    smoothHorizontal('-1rem')
                                }
                            >
                                <Typography
                                    color="gray500"
                                    size="20px"
                                    weight="sm"
                                    value={`빠르게 미팅을 시작하고, 아이디어를 공유해보세요.\nNimble은 빠르고 간편한 화상회의 서비스입니다.`}
                                />
                            </div>
                            <FlexContainer
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                gap="1.5rem"
                                ref={buttonRef}
                                customCss={
                                    // TODO
                                    // customCss 빈 값이 들어가도 타입 에러가 안나도록 스토리북 수정
                                    // Usage example
                                    // => buttonIntersecting && smoothHorizontal('-1rem')
                                    buttonIntersecting
                                        ? smoothHorizontal('-1rem')
                                        : css``
                                }
                            >
                                <Button
                                    theme="link"
                                    size="xl"
                                    width="10rem"
                                    fontSize="1.125rem"
                                    onClick={moveMainPage}
                                >
                                    시작하기
                                </Button>
                                <Button
                                    theme="dark"
                                    size="xl"
                                    width="10rem"
                                    fontSize="1rem"
                                >
                                    더 알아보기
                                </Button>
                            </FlexContainer>
                        </FlexContainer>
                    </FlexContainer>
                    <div
                        ref={mainImageRef}
                        css={[
                            introSectionImageStyle,
                            mainImageIntersecting && smoothHorizontal('1rem')
                        ]}
                    />
                </FlexContainer>
                <FlexContainer
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="4rem"
                    customCss={css`
                        width: 100%;
                    `}
                >
                    {CONSTANT.EXPLANE.map((data) => (
                        <ExplaneCard
                            key={data.title}
                            title={data.title}
                            description={data.description}
                            icon={data.icon}
                            trasitionDelay={data.delay}
                        />
                    ))}
                </FlexContainer>
                <FlexContainer
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="5rem"
                >
                    <FlexContainer
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        gap="1rem"
                        ref={mottoRef}
                        customCss={
                            mottoIntersecting ? smoothVertical('-1rem') : css``
                        }
                    >
                        <Typography
                            color="gray50"
                            size="48px"
                            weight="lg"
                            value={`Nimble은 무료하지 않은 회의를 목표로 합니다.`}
                        />
                        <FlexContainer
                            direction="row"
                            justifyContent="start"
                            alignItems="start"
                        >
                            <Typography
                                color="blue600"
                                size="48px"
                                weight="lg"
                                value={`즐거운 회의`}
                            />
                            <Typography
                                color="gray50"
                                size="48px"
                                weight="lg"
                                value={`를 시작해보세요.`}
                            />
                        </FlexContainer>
                    </FlexContainer>
                    <div
                        ref={sectionImageRef}
                        css={sectionImageIntersecting && smoothVertical('1rem')}
                    >
                        <Image
                            src={'/pngwing.png'}
                            width={800}
                            height={450}
                            alt="main"
                        />
                    </div>
                </FlexContainer>
                <FlexContainer
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    customCss={css`
                        width: 100%;
                    `}
                    gap="3rem"
                >
                    <FlexContainer
                        direction="column"
                        justifyContent="center"
                        alignItems="start"
                        gap="1rem"
                        customCss={css`
                            width: 100%;
                        `}
                    >
                        {' '}
                        <div
                            ref={priceRef}
                            css={priceIntersecting && smoothVertical('-1rem')}
                        >
                            <Typography
                                color="gray50"
                                size="48px"
                                weight="lg"
                                value="요금"
                            />
                        </div>
                        <div
                            ref={priceDescriptionRef}
                            css={[
                                priceDescriptionIntersecting &&
                                    smoothHorizontal('1rem')
                            ]}
                        >
                            <Typography
                                color="gray500"
                                size="20px"
                                weight="lg"
                                value={`Nimble은 사용자 및 기업에게 유리한 조건을 제공합니다.\n 여러분의 회의에 맞는 요금제를 선택해보세요.`}
                            />
                        </div>
                    </FlexContainer>
                    <FlexContainer
                        direction="row"
                        justifyContent="center"
                        alignItems="start"
                        gap="3rem"
                        customCss={css`
                            width: 100%;
                            margin-bottom: 10rem;
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
                                animationDelay={pricing.delay}
                            />
                        ))}
                    </FlexContainer>
                </FlexContainer>
            </div>
        </main>
    );
};

export default Landing;
