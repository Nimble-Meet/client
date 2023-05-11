// craeteNewUser function Type
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
