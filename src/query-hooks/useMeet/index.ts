import { AxiosError } from 'axios';
import { useQuery, useMutation } from 'react-query';

// apis
import {
    getMeet,
    getSpecificMeet,
    postMeet,
    inviteMeet,
    kickOutMeet
} from './api';

// query key
import { meetKey } from './key';

// lib utils
import renderToast from '@/lib/toast';

import type { Post, Get } from './api.type';

// [GET] 본인에게 해당되는 meeting 목록을 가져옴
const useGetMeet = () =>
    useQuery<Get.All.Return>(meetKey.all(), getMeet, {
        onError: () => {
            renderToast({
                type: 'error',
                message:
                    '미팅 목록을 가져오는데 실패했습니다. 다시 시도해주세요.'
            });
        }
    });

// [GET] 특정 meeting 정보를 가져옴
const useGetSpecificMeet = (id: string) =>
    useQuery<Get.Specific.Return>(
        meetKey.specificMeet(id),
        () => getSpecificMeet({ id }),
        {
            onError: () => {
                renderToast({
                    type: 'error',
                    message:
                        '특정 미팅 정보를 가져오는데 실패했습니다. 다시 시도해주세요.'
                });
            }
        }
    );

// [POST] 새로운 meeting을 만듦
const usePostMeet = () => {
    return useMutation<Post.Meet.Return, AxiosError, Post.Meet.ReqParams>(
        ({ title, description }) => postMeet({ title, description }),
        {
            onSuccess: (data: Post.Meet.Return) => {
                return Promise.resolve(data);
            },
            onError: () => {
                renderToast({
                    type: 'error',
                    message: '미팅 생성을 실패했습니다. 다시 시도해주세요.',
                    duration: 2000
                });
            }
        }
    );
};

// [POST] 특정 meeting에 사용자를 초대함
const useInviteMeet = () => {
    return useMutation<
        Post.Invite.Return,
        AxiosError,
        Post.Invite.ReqParamsWithId
    >(({ id, email }) => inviteMeet({ id, email }), {
        onSuccess: (data: Post.Invite.Return) => {
            return Promise.resolve(data);
        },
        onError: () => {
            renderToast({
                type: 'error',
                message: '미팅 초대를 실패했습니다. 다시 시도해주세요.',
                duration: 2000
            });
        }
    });
};

// [POST] 특정 meeting에서 사용자를 강퇴함
const useKickOutMeet = () => {
    return useMutation<
        Post.KickOut.Return,
        AxiosError,
        Post.KickOut.ReqParamsWithId
    >(({ id, email }) => kickOutMeet({ id, email }), {
        onSuccess: (data: Post.KickOut.Return) => {
            return Promise.resolve(data);
        },
        onError: () => {
            renderToast({
                type: 'error',
                message: '강퇴를 실패했습니다. 다시 시도해주세요.',
                duration: 2000
            });
        }
    });
};

export {
    useGetMeet,
    useGetSpecificMeet,
    usePostMeet,
    useInviteMeet,
    useKickOutMeet
};
