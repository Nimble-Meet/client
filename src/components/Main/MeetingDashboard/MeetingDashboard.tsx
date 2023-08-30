'use client';

// react-query
import { useGetMeet } from '@/query-hooks/useMeet';

// components
import { FlexContainer, Typography } from 'nimble-ds';
import { MeetingCard } from '@/components/Main';

// emotion
import {
    layoutStyle,
    descriptionStyle,
    mainStyle
} from './MeetingDashboard.style';

const MeetingDashboard = () => {
    const { data: meetings } = useGetMeet();

    return (
        <FlexContainer direction="column" customCss={layoutStyle}>
            <FlexContainer customCss={descriptionStyle}>
                <Typography value="대시보드" size="24px" weight="lg" />
            </FlexContainer>
            <FlexContainer
                customCss={mainStyle}
                gap="1.5rem"
                direction="column"
            >
                {meetings?.map((item, i) => (
                    <MeetingCard
                        key={i}
                        meetingId={+item.id}
                        title={item.meetName}
                        description={item.description}
                        host={item.host}
                        peoples={item.members}
                    />
                ))}
            </FlexContainer>
        </FlexContainer>
    );
};

export default MeetingDashboard;
