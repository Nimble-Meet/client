declare module 'UserInterfaces' {
    export interface IUserLogin {
        email: string;
        password: string;
    }

    export interface IUserSignUp {
        nickname: string;
        email: string;
        password: string;
        passwordCheck: string;
    }

    export type ProviderType = 'LOCAL' | 'GOOGLE' | 'KAKAO' | 'NAVER';
}

declare module 'ErrorInterfaces' {
    export interface IApiErrorResponse {
        error: string;
        message: string;
        status: number;
    }
}

declare module 'MeetInterface' {
    export interface User {
        email: string;
        nickname: string;
    }

    export interface IMeet {
        id: number;
        meetName: string;
        description: string;
        createdAt: Date;
        host: User;
        members: User[];
    }
}

declare module 'InputInterface' {
    export type Type =
        | 'button'
        | 'checkbox'
        | 'date'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week';

    export type SignInInputType = 'email' | 'password';

    export type SignUpInputType =
        | 'nickname'
        | 'email'
        | 'password'
        | 'passwordCheck';
}

declare module 'FontInterface' {
    export type Color =
        | 'gray50'
        | 'gray100'
        | 'gray200'
        | 'gray300'
        | 'gray400'
        | 'gray500'
        | 'gray600'
        | 'gray700'
        | 'gray800'
        | 'gray900'
        | 'blue50'
        | 'blue100'
        | 'blue200'
        | 'blue300'
        | 'blue400'
        | 'blue500'
        | 'blue600'
        | 'blue700'
        | 'blue800'
        | 'blue900'
        | 'red50'
        | 'red100'
        | 'red200'
        | 'red300'
        | 'red400'
        | 'red500'
        | 'red600'
        | 'red700'
        | 'red800'
        | 'red900'
        | 'orange50'
        | 'orange100'
        | 'orange200'
        | 'orange300'
        | 'orange400'
        | 'orange500'
        | 'orange600'
        | 'orange700'
        | 'orange800'
        | 'orange900'
        | 'green50'
        | 'green100'
        | 'green200'
        | 'green300'
        | 'green400'
        | 'green500'
        | 'green600'
        | 'green700'
        | 'green800'
        | 'green900'
        | 'grape50'
        | 'grape100'
        | 'grape200'
        | 'grape300'
        | 'grape400'
        | 'grape500'
        | 'grape600'
        | 'grape700'
        | 'grape800'
        | 'grape900'
        | 'violet50'
        | 'violet100'
        | 'violet200'
        | 'violet300'
        | 'violet400'
        | 'violet500'
        | 'violet600'
        | 'violet700'
        | 'violet800'
        | 'violet900'
        | 'cyan50'
        | 'cyan100'
        | 'cyan200'
        | 'cyan300'
        | 'cyan400'
        | 'cyan500'
        | 'cyan600'
        | 'cyan700'
        | 'cyan800'
        | 'cyan900'
        | 'lime50'
        | 'lime100'
        | 'lime200'
        | 'lime300'
        | 'lime400'
        | 'lime500'
        | 'lime600'
        | 'lime700'
        | 'lime800'
        | 'lime900'
        | 'yellow50'
        | 'yellow100'
        | 'yellow200'
        | 'yellow300'
        | 'yellow400'
        | 'yellow500'
        | 'yellow600'
        | 'yellow700'
        | 'yellow800'
        | 'yellow900';

    export type Weight = 'sm' | 'md' | 'lg';
}
