'use client';
import React from 'react';

// react-query
import { usePostMeet } from '@/query-hooks/useMeet';

// components
import { Button, FlexContainer, Modal } from 'nimble-ds';
import { InputContainer } from '@/components/Ui';

import type { IMeetCreate } from 'MeetInterface';

interface Props {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateMeetModal = ({ isModalOpen, setIsModalOpen }: Props) => {
    const [meetingData, setMeetingData] = React.useState<IMeetCreate>({
        meetName: '',
        description: ''
    });

    const { mutateAsync: postMeetMutate } = usePostMeet();

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: meetName } = e.target;

        setMeetingData((prev) => ({
            ...prev,
            meetName
        }));
    };

    const changeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: description } = e.target;

        setMeetingData((prev) => ({
            ...prev,
            description
        }));
    };

    const postMeet = async (meetingData: IMeetCreate) => {
        await postMeetMutate(meetingData);

        setIsModalOpen(false);
    };

    const isValideTitle = /^.{2,48}$/.test(meetingData.meetName);

    return (
        <Modal isOpen={isModalOpen}>
            <Modal.Header toggle={() => setIsModalOpen(false)} />
            <Modal.Body>
                <FlexContainer direction="column" gap="1rem">
                    <InputContainer
                        labelText="미팅 제목"
                        placeholder="미팅 제목을 입력해주세요. ( 2 ~ 48자 )"
                        value={meetingData.meetName}
                        onChange={changeTitle}
                        id="title"
                        size="lg"
                        isRequired
                    />
                    <InputContainer
                        labelText="미팅 설명"
                        placeholder="미팅 설명을 입력해주세요."
                        value={meetingData.description}
                        onChange={changeDescription}
                        id="description"
                        size="lg"
                    />
                </FlexContainer>
            </Modal.Body>
            <Modal.Footer>
                <FlexContainer alignItems="center" gap="0.5rem">
                    <Button
                        color="basic"
                        size="lg"
                        onClick={() => setIsModalOpen(false)}
                    >
                        취소
                    </Button>
                    <Button
                        type="submit"
                        size="lg"
                        onClick={() => postMeet(meetingData)}
                        disabled={!isValideTitle}
                    >
                        만들기
                    </Button>
                </FlexContainer>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateMeetModal;
