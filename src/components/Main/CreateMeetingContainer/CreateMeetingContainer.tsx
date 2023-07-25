'use client';
import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

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

interface Props {
    userData:
        | {
              email: string;
              nickname: string;
              providerType: ProviderType;
          }
        | undefined;
}

const CreateMeetingContainer = ({ userData }: Props) => {
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
                        onClick={() => setIsModalOpen(true)}
                    >
                        미팅 만들기
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
