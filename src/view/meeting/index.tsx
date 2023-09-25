'use client';

import { MemberSpace, ChatSpace } from '@/components/Meeting';

const Meeting = ({ meetingData }: { meetingData: any }) => {
    const members = [meetingData.host, ...meetingData.members];

    return (
        <main>
            <MemberSpace members={[...members, ...members]} />
        </main>
    );
};

export default Meeting;
