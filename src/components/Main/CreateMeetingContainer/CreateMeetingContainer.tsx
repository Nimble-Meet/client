'use client';
import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

// react-query
import { useQuery } from '@tanstack/react-query';
import { fetchLoginStatus } from '@/query-hooks/useUser';

// common
import COLOR from '@/common/color';

// icons
import { RiChatSmileFill } from 'react-icons/ri';
import { BsChevronDoubleRight } from 'react-icons/bs';

// components
import { FlexContainer, Typography, Button } from 'nimble-ds';
import { CreateMeetModal } from '@/components/Main';

// emotion
import {
    layoutStyle,
    mainStyle,
    descriptionStyle
} from './CreateMeetingContainer.style';

import type { ProviderType } from 'UserInterfaces';

const handleCreateMeeting = ({
    userData,
    navigate,
    openModal
}: {
    userData:
        | {
              email: string;
              nickname: string;
              providerType: ProviderType;
          }
        | undefined;
    navigate: () => void;
    openModal: () => void;
}) => {
    if (!userData) {
        navigate();
        return;
    }
    openModal();
};

const CreateMeetingContainer = () => {
    const router = useRouter();

    const { data: userData } = useQuery(fetchLoginStatus());
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <FlexContainer direction="column" customCss={layoutStyle}>
            <FlexContainer justifyContent="end" customCss={descriptionStyle}>
                <Link href={'/about'} style={{ textDecoration: 'none' }}>
                    <FlexContainer gap="0.25rem" alignItems="center">
                        <Typography
                            value="더 알아보기"
                            size="0.75rem"
                            color="gray500"
                        />
                        <BsChevronDoubleRight
                            color={COLOR.gray500}
                            size="0.875rem"
                        />
                    </FlexContainer>
                </Link>
            </FlexContainer>
            <section css={css(mainStyle)}>
                <FlexContainer
                    direction="column"
                    alignItems="center"
                    gap="1.5rem"
                >
                    <FlexContainer
                        direction="column"
                        alignItems="center"
                        gap="0.5rem"
                    >
                        <RiChatSmileFill color={COLOR.gray400} size="3rem" />
                        <Typography value="미팅을 만들어볼까요?" size="1rem" />
                        <Typography
                            value="팀원들을 초대해 미팅을 시작해보세요."
                            size="0.875rem"
                            color="gray600"
                        />
                    </FlexContainer>
                    <Button
                        size="xl"
                        width={400}
                        onClick={() =>
                            handleCreateMeeting({
                                userData,
                                navigate: () => router.push('/auth/signIn'),
                                openModal: () => setIsModalOpen(true)
                            })
                        }
                    >
                        {userData ? '미팅 만들기' : '로그인하고 미팅 시작하기'}
                    </Button>
                </FlexContainer>
            </section>
            <CreateMeetModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </FlexContainer>
    );
};

export default CreateMeetingContainer;
