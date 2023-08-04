import { ProviderType } from 'UserInterfaces';

export namespace Get {
    // 유저 정보 가져오기 namespace
    export namespace UserInfo {
        export interface ReqParams {
            email: string;
        }

        export interface Response {
            email: string;
            nickname: string;
        }

        export type Return = Response;

        export interface Func {
            (params: ReqParams): Promise<Return>;
        }
    }

    // 유저 로그인 상태 확인하기 namespace
    export namespace CheckUser {
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
}

export namespace Post {
    // 새로운 유저 만들기 namespace
    export namespace NewUser {
        export interface ReqParams {
            nickname: string;
            email: string;
            password: string;
        }

        export interface Response {
            email: string;
            nickname: string;
            providerType: ProviderType;
        }

        export type Return = Response;

        export interface Func {
            (params: ReqParams): Promise<Return>;
        }
    }
}
