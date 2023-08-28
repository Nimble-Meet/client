import React from 'react';

// react-query
import { useInviteMeet, useGetSpecificMeet } from '@/query-hooks/useMeet';
// hooks
import useOnClickOutside from '@/hooks/useOnClickOutside';

// components
import { Input, Button, FlexContainer } from 'nimble-ds';

// emotion
import { layoutStyle } from './PeopleSearchBox.style';

interface Props {
    meetingId: number;
    setIsSearchBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PeopleSearchBox = ({ meetingId, setIsSearchBoxOpen }: Props) => {
    const [userEmail, setUserEmail] = React.useState('');
    const { data } = useGetSpecificMeet(meetingId);
    const { mutateAsync: inviteMeetMutate, isLoading } = useInviteMeet();

    const changeUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setUserEmail(value);
    };

    const inviteMeet = (meetingId: number, email: string) => async () => {
        await inviteMeetMutate({ meetingId, email });
    };

    const ref = React.useRef<HTMLDivElement>(null);

    useOnClickOutside({ ref, handler: () => setIsSearchBoxOpen(false) });

    return (
        <FlexContainer gap="0.5rem" customCss={layoutStyle} ref={ref}>
            <Input
                id="userEmail"
                value={userEmail}
                onChange={changeUserEmail}
                placeholder="이메일을 입력해주세요."
                size="lg"
            />
            <Button onClick={inviteMeet(meetingId, userEmail)} size="lg">
                초대
            </Button>
        </FlexContainer>
    );
};

export default PeopleSearchBox;
