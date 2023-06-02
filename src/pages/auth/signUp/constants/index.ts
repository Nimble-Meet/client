import {
    validateNickname,
    validateEmail,
    validatePassword
} from '@/utils/Auth/validation';

interface SignUpData {
    action: 'signUp';
    key: string;
    label: string;
    type: string;
    placeholder: string;
    validate: (value: string) => boolean;
    inValidMessage: string;
}

export const SIGN_UP_INPUT_DATA: SignUpData[] = [
    {
        action: 'signUp',
        key: 'nickname',
        label: '닉네임',
        type: 'text',
        placeholder: '닉네임을 입력해주세요.',
        validate: (nickname: string) => validateNickname(nickname),
        inValidMessage: '2~16자의 영문, 숫자, 한글만 사용 가능합니다.'
    },
    {
        action: 'signUp',
        key: 'email',
        label: '이메일',
        type: 'text',
        placeholder: '이메일을 입력해주세요.',
        validate: (email: string) => validateEmail(email),
        inValidMessage: '이메일 형식이 올바르지 않습니다.'
    },
    {
        action: 'signUp',
        key: 'password',
        label: '비밀번호',
        type: 'password',
        placeholder: '비밀번호를 입력해주세요.',
        validate: (password: string) => validatePassword(password),
        inValidMessage: '8~16자의 영문, 숫자를 사용해야 합니다.'
    }
];
