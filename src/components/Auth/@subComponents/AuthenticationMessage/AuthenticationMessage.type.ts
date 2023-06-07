export namespace Props {
    export interface AuthenticationMessage {
        suggestedText: string;
        actionText: string;
        moveHandler: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    }
}
