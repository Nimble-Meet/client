'use client';
import React from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';

// components
import { Button, FlexContainer, Typography } from 'nimble-ds';
import { Avatar } from '@/components/Ui';
import { InvitePeopleAvater } from '@/components/Main';

// emotion
import { layoutStyle } from './MeetingCard.style';

interface Props {
    meetingId: number;
    title: string;
    description: string;
    host: {
        email: string;
        nickname: string;
    };
    peoples: {
        email: string;
        nickname: string;
    }[];
}

const MeetingCard = ({
    meetingId,
    title,
    description,
    host,
    peoples
}: Props) => {
    const router = useRouter();

    const moveMeetingPage = (meetingId: number) => () => {
        router.push(`/meeting/${meetingId}`);
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
                        <Avatar
                            nickname={host.nickname}
                            // imgSrc={people.imgSrc}
                            isFirst
                            size={40}
                        />
                        {peoples.map((people, i) => (
                            <Avatar
                                key={i}
                                nickname={people.nickname}
                                // imgSrc={people.imgSrc}
                                zIndex={i}
                                size={40}
                            />
                        ))}
                        <InvitePeopleAvater meetingId={meetingId} />
                    </FlexContainer>
                    <Button
                        onClick={moveMeetingPage(meetingId)}
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
