import { validateEmail, validatePassword } from '../../utils/validation';

export const SIGN_IN_INPUT_DATA = [
    {
        key: 'email',
        label: '이메일',
        type: 'text',
        placeholder: '이메일을 입력해주세요',
        validate: (email: string) => validateEmail(email),
        inValidMessage: '이메일 형식이 올바르지 않습니다.'
    },
    {
        key: 'password',
        label: '패스워드',
        type: 'password',
        placeholder: '패스워드를 입력해주세요',
        validate: (password: string) => validatePassword(password),
        inValidMessage: '8~16자의 영문, 숫자를 사용해야 합니다.'
    }
];

export const OAUTH_BUTTON_SRC = {
    GOOGLE: {
        src: 'https://statics.goorm.io/images/social/logo/googleLogo.svg',
        bgColor: '#ffffff'
    },
    KAKAO: {
        src: 'https://statics.goorm.io/images/social/logo/kakaoLogo.svg',
        bgColor: '#fee500'
    }
};
