import { ProviderType } from 'UserInterfaces';

export type AuthType = 'login' | 'logout';

export namespace PostAuthenticateUser {
    export interface ReqParams {
        email: string;
        password: string;
    }

    export interface Response {
        userId: number;
        accessToken: string;
    }

    export type Return = Response;

    export interface Func {
        (params: ReqParams): Promise<Return>;
    }
}

export namespace PostLogoutUser {
    export interface Response {
        email: string;
        nickname: string;
        ProviderType: ProviderType;
    }

    export type Return = Response;

    export interface Func {
        (): Promise<Return>;
    }
}
