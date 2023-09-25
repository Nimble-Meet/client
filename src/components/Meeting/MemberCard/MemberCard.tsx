'use client';

import React from 'react';

import { FlexContainer } from 'nimble-ds';
import { Avatar } from '@/components/Ui';

import { containerStyle } from './MemberCard.style';

const MemberCard = ({ nickname, email }: any) => {
    console.log(email);

    return (
        <FlexContainer
            direction="column"
            alignItems="center"
            gap="0.5rem"
            customCss={containerStyle}
        >
            <Avatar nickname={nickname} size={120} />
            {nickname}
        </FlexContainer>
    );
};

export default MemberCard;
