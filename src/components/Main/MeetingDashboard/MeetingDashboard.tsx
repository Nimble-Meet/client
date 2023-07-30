'use client';

// components
import { FlexContainer, Typography } from 'nimble-ds';
import { MeetingCard } from '@/components/Main';

// emotion
import {
    layoutStyle,
    descriptionStyle,
    mainStyle
} from './MeetingDashboard.style';

import { DUMMY } from './dummy';

const MeetingDashboard = () => {
    return (
        <FlexContainer direction="column" customCss={layoutStyle}>
            <FlexContainer customCss={descriptionStyle}>
                <Typography value="대시보드" size="24px" weight="lg" />
            </FlexContainer>
            <FlexContainer customCss={mainStyle} gap="1.5rem" wrap="wrap">
                {DUMMY.map((item, i) => (
                    <MeetingCard
                        key={i}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        peoples={item.peoples}
                    />
                ))}
            </FlexContainer>
        </FlexContainer>
    );
};

export default MeetingDashboard;
