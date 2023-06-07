export namespace Props {
    export interface SamePasswordCheckInput {
        password: string;
        isSamePasswordValid: boolean;
        setIsSamePasswordValid: React.Dispatch<React.SetStateAction<boolean>>;
    }
}
