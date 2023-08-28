'use client';
import React from 'react';

// react-icon
import { AiOutlineUserAdd } from 'react-icons/ai';
// component
import { PeopleSearchBox } from '@/components/Main';

// emotion
import { layoutStyle } from './InvitePeopleAvater.style';
import COLOR from '@/common/color';

interface Props {
    meetingId: number;
}

const InvitePeopleAvater = ({ meetingId }: Props) => {
    const [isSearchBoxOpen, setIsSearchBoxOpen] = React.useState(false);
    return (
        <figure css={layoutStyle} onClick={() => setIsSearchBoxOpen(true)}>
            <AiOutlineUserAdd size={32} color={COLOR.gray600} />
            {isSearchBoxOpen && (
                <PeopleSearchBox
                    meetingId={meetingId}
                    setIsSearchBoxOpen={setIsSearchBoxOpen}
                />
            )}
        </figure>
    );
};

export default InvitePeopleAvater;
