import { ProviderType } from 'UserInterfaces';

export namespace CreateNewUser {
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
