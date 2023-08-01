import { ProviderType } from 'UserInterfaces';

export namespace Post {
    // Login 관련 namespace
    export namespace LoginAuthenticate {
        export interface ReqParams {
            email: string;
            password: string;
        }

        export interface Response {
            userId: number;
            access_token: string;
        }

        export type Return = Response;

        export interface Func {
            (params: ReqParams): Promise<Return>;
        }
    }

    // Login 관련 namespace
    export namespace Logout {
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
}
