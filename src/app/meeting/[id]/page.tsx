import { fetcher } from '@/app/api/fetcher';

import MeetingPage from '@/view/meeting';

const fetchMeeting = async (meetingId: string) => {
    const response = await fetcher(`/api/meet/${meetingId}`);

    return response;
};

const Meeting = async (response: any) => {
    const { id: meetingId } = response.params;

    const meetingData = await fetchMeeting(meetingId);

    return <MeetingPage meetingData={meetingData} />;
};

export default Meeting;
