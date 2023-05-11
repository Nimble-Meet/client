// checkUserLoginStatus function Type
export namespace CheckUserLoginStatus {
    export interface Response {
        data: {
            email: string;
            nickname: string;
            providerType: 'LOCAL' | 'GOOGLE' | 'KAKAO' | 'NAVER';
        };
    }

    export interface Return {
        data: {
            email: string;
            nickname: string;
            providerType: 'LOCAL' | 'GOOGLE' | 'KAKAO' | 'NAVER';
        };
    }

    export interface GetFunc {
        (): Promise<Return>;
    }
}
