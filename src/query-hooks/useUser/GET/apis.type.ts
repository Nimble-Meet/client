export type ProviderType = 'LOCAL' | 'GOOGLE' | 'KAKAO' | 'NAVER';

export namespace CheckUserLoginStatus {
    export interface Response {
        email: string;
        nickname: string;
        providerType: ProviderType;
    }

    export type Return = Response;

    export interface Func {
        (): Promise<Return>;
    }
}
