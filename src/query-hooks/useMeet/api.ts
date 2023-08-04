import axiosInstance from '@/lib/axiosInstance';

import type { Post, Get } from './api.type';

// [GET] 본인에게 해당되는 meeting 목록을 가져옴
const getMeet: Get.All.Func = async () => {
    const { data } = await axiosInstance.get<Get.All.Response>('meet');

    return data;
};

// [GET] 특정 meeting 정보를 가져옴
const getSpecificMeet: Get.Specific.Func = async ({ id }) => {
    const { data } = await axiosInstance.get<Get.Specific.Response>(
        `meet/${id}`
    );

    return data;
};

// [POST] 새로운 meeting을 만듦
const postMeet: Post.Meet.Func = async ({ title, description }) => {
    const params = <Post.Meet.ReqParams>{
        title,
        description
    };

    const { data } = await axiosInstance.post<Post.Meet.Response>(
        'meet',
        params
    );

    return data;
};

// [POST] 특정 meeting에 사용자를 초대함
const inviteMeet: Post.Invite.Func = async ({ id, email }) => {
    const params = <Post.Invite.ReqParams>{
        email
    };

    const { data } = await axiosInstance.post<Post.Invite.Response>(
        `meet/${id}/invite`,
        params
    );

    return data;
};

// [POST] 특정 meeting에서 사용자를 강퇴함
const kickOutMeet: Post.KickOut.Func = async ({ id, email }) => {
    const params = <Post.KickOut.ReqParams>{
        email
    };

    const { data } = await axiosInstance.post<Post.KickOut.Response>(
        `meet/${id}/kick-out`,
        params
    );

    return data;
};

export { getMeet, getSpecificMeet, postMeet, inviteMeet, kickOutMeet };
