import { IMeet } from 'MeetInterface';

export namespace Get {
    // 전체 미팅 가져오기 namespace
    export namespace All {
        export type Response = IMeet[];

        export type Return = Response;

        export interface Func {
            (): Promise<Return>;
        }
    }

    // 특정 미팅 가져오기 namespace
    export namespace Specific {
        export interface ReqParams {
            id: string;
        }

        export type Response = IMeet;

        export type Return = Response;

        export interface Func {
            (params: ReqParams): Promise<Return>;
        }
    }
}

export namespace Post {
    // 미팅 만들기 namespace
    export namespace Meet {
        export interface ReqParams {
            title: string;
            description: string;
        }

        export type Response = IMeet;

        export type Return = Response;

        export interface Func {
            (params: ReqParams): Promise<Return>;
        }
    }

    // 미팅 초대하기 namespace
    export namespace Invite {
        export interface ReqParams {
            email: string;
        }

        export interface ReqParamsWithId extends ReqParams {
            id: string;
        }

        export type Response = IMeet;

        export type Return = Response;

        export interface Func {
            (params: ReqParamsWithId): Promise<Return>;
        }
    }

    // 미팅에서 특정 유저 추방하기 namespace
    export namespace KickOut {
        export interface ReqParams {
            email: string;
        }

        export interface ReqParamsWithId extends ReqParams {
            id: string;
        }

        export type Response = IMeet;

        export type Return = Response;

        export interface Func {
            (params: ReqParamsWithId): Promise<Return>;
        }
    }
}
