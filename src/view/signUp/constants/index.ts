import type { SignUpInputType, Type } from 'InputInterface';

export const SIGN_UP_INPUT_DATA = [
    {
        key: 'nickname' as SignUpInputType,
        label: '닉네임',
        type: 'text' as Type,
        placeholder: '닉네임을 입력해주세요.',
        validate: /^(?:[a-zA-Z0-9]{2,16}|[가-힣]{2,8})$/,
        inValidMessage: '2~16자의 영문, 숫자, 한글만 사용 가능합니다.'
    },
    {
        key: 'email' as SignUpInputType,
        label: '이메일',
        type: 'text' as Type,
        placeholder: '이메일을 입력해주세요.',
        validate: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
        inValidMessage: '이메일 형식이 올바르지 않습니다.'
    },
    {
        key: 'password' as SignUpInputType,
        label: '비밀번호',
        type: 'password' as Type,
        placeholder: '비밀번호를 입력해주세요.',
        validate: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
        inValidMessage: '8~16자의 영문, 숫자를 사용해야 합니다.'
    },
    {
        key: 'passwordCheck' as SignUpInputType,
        label: '비밀번호 확인',
        type: 'password' as Type,
        placeholder: '비밀번호를 다시 입력해주세요.',
        validate: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
        inValidMessage: '비밀번호가 일치하지 않습니다.'
    }
];
