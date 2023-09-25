'use client';

import React from 'react';

import { FlexContainer } from 'nimble-ds';

import { MemberCard } from '@/components/Meeting';

const MemberSpace = ({ members }: any) => (
    <section>
        <FlexContainer direction="column">
            {members.map((member: any, i: any) => (
                <MemberCard
                    key={i}
                    nickname={member.nickname}
                    email={member.email}
                />
            ))}
        </FlexContainer>
    </section>
);

export default MemberSpace;
