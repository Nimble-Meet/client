import { validateEmail, validatePassword } from '@/utils/Auth/validation';

import type { SignInInputType, Type } from 'InputInterface';

export const SIGN_IN_INPUT_DATA = [
    {
        key: 'email' as SignInInputType,
        label: '이메일',
        type: 'text' as Type,
        placeholder: '이메일을 입력해주세요',
        validate: (email: string) => validateEmail(email),
        inValidMessage: '이메일 형식이 올바르지 않습니다.'
    },
    {
        key: 'password' as SignInInputType,
        label: '패스워드',
        type: 'password' as Type,
        placeholder: '패스워드를 입력해주세요',
        validate: (password: string) => validatePassword(password),
        inValidMessage: '8~16자의 영문, 숫자를 사용해야 합니다.'
    }
];

export const OAUTH_BUTTONS = [
    {
        src: 'https://statics.goorm.io/images/social/logo/googleLogo.svg',
        handler: () => {
            window.location.href = '/api/auth/login/google';
        },
        bgColor: '#ffffff'
    },
    {
        src: 'https://statics.goorm.io/images/social/logo/naverLogo.svg',
        handler: () => {
            window.location.href = '/api/auth/login/naver';
        },
        bgColor: '#1dc800'
    }
];
