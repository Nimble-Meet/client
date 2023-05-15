// craeteNewUser function Type

enum ProviderType {
    LOCAL = 'LOCAL',
    GOOGLE = 'GOOGLE',
    KAKAO = 'KAKAO',
    NAVER = 'NAVER'
}
export namespace CreateNewUser {
    export interface ReqParams {
        nickname: string;
        email: string;
        password: string;
    }

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

    export interface PostFunc {
        (params: ReqParams): Promise<Return>;
    }
}

// postAuthenticateUser function Type
export namespace PostAuthenticateUser {
    export interface ReqParams {
        email: string;
        password: string;
    }

    export interface Response {
        accessToken: string;
        data: {
            userId: number;
            accessToken: string;
        };
    }

    export interface Return {
        data: {
            userId: number;
            accessToken: string;
        };
    }

    export interface PostFunc {
        (params: ReqParams): Promise<Return>;
    }
}
