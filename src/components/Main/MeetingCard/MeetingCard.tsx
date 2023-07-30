'use client';
import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';

// components
import { Button, FlexContainer, Typography } from 'nimble-ds';
import { Avatar } from '@/components/Ui';

// emotion
import { layoutStyle } from './MeetingCard.style';
import { StaticImageData } from 'next/image';

interface Props {
    id: string;
    title: string;
    description: string;
    peoples: {
        email: string;
        nickname: string;
        imgSrc: string | StaticImageData;
    }[];
}

const MeetingCard = ({ id, title, description, peoples }: Props) => {
    const router = useRouter();

    const moveMeetingPage = (id: string) => () => {
        router.push(`/meeting/${id}`);
    };

    return (
        <section css={layoutStyle}>
            <FlexContainer
                direction="column"
                justifyContent="between"
                customCss={css`
                    height: 100%;
                `}
            >
                <FlexContainer direction="column" gap="0.5rem">
                    <Typography value={title} size="1.25rem" weight="lg" />
                    <Typography value={description} size="0.875rem" wordBreak />
                </FlexContainer>
                <FlexContainer justifyContent="between" alignItems="end">
                    <FlexContainer>
                        {peoples.map((people, i) => (
                            <Avatar
                                key={i}
                                nickname={people.nickname}
                                imgSrc={people.imgSrc}
                                isFirst={i === 0}
                            />
                        ))}
                    </FlexContainer>
                    <Button
                        onClick={moveMeetingPage(id)}
                        color="link"
                        size="lg"
                    >
                        참여
                    </Button>
                </FlexContainer>
            </FlexContainer>
        </section>
    );
};

export default MeetingCard;
