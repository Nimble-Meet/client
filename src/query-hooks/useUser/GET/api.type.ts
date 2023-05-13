// checkUserLoginStatus function Type
export namespace CheckUserLoginStatus {
    export interface Response {
        email: string;
        nickname: string;
        providerType: 'LOCAL' | 'GOOGLE' | 'KAKAO' | 'NAVER';
    }

    export interface Return {
        email: string;
        nickname: string;
        providerType: 'LOCAL' | 'GOOGLE' | 'KAKAO' | 'NAVER';
    }

    export interface GetFunc {
        (): Promise<Return>;
    }
}
