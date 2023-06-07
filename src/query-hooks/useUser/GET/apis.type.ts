import { ProviderType } from 'UserInterfaces';

export namespace CheckLoginStatus {
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
