// checkUserLoginStatus function Type

enum ProviderType {
    LOCAL = 'LOCAL',
    GOOGLE = 'GOOGLE',
    KAKAO = 'KAKAO',
    NAVER = 'NAVER'
}
export namespace CheckUserLoginStatus {
    export interface Response {
        data: {
            email: string;
            nickname: string;
            providerType: ProviderType;
        };
    }

    export interface Return {
        data: {
            email: string;
            nickname: string;
            providerType: ProviderType;
        };
    }

    export interface GetFunc {
        (): Promise<Return>;
    }
}
