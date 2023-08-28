import axiosInstance from '@/lib/axiosInstance';

import type { Post, Get } from './api.type';

// [GET] 본인에게 해당되는 meeting 목록을 가져옴
const getMeet: Get.All.Func = async () => {
    const { data } = await axiosInstance.get<Get.All.Response>('meet');

    return data;
};

// [GET] 특정 meeting 정보를 가져옴
const getSpecificMeet: Get.Specific.Func = async ({ meetingId }) => {
    const { data } = await axiosInstance.get<Get.Specific.Response>(
        `meet/${meetingId}`
    );

    return data;
};

// [POST] 새로운 meeting을 만듦
const postMeet: Post.Meet.Func = async ({ meetName, description }) => {
    const params = <Post.Meet.ReqParams>{
        meetName,
        description
    };

    const { data } = await axiosInstance.post<Post.Meet.Response>(
        'meet',
        params
    );

    return data;
};

// [POST] 특정 meeting에 사용자를 초대함
const inviteMeet: Post.Invite.Func = async ({ meetingId, email }) => {
    const params = <Post.Invite.ReqParams>{
        email
    };

    const { data } = await axiosInstance.post<Post.Invite.Response>(
        `meet/${meetingId}/member`,
        params
    );

    return data;
};

// [POST] 특정 meeting에서 사용자를 강퇴함
const kickOutMeet: Post.KickOut.Func = async ({ meetingId, userId }) => {
    const params = <Post.KickOut.ReqParams>{
        userId
    };

    const { data } = await axiosInstance.post<Post.KickOut.Response>(
        `meet/${meetingId}/member/${userId}`,
        params
    );

    return data;
};

export { getMeet, getSpecificMeet, postMeet, inviteMeet, kickOutMeet };
