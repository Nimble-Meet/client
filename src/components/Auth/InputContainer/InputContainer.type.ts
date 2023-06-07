export namespace Props {
    export interface InputContainer<T> {
        id: string;
        type: any;
        placeholder: string;
        labelText: string;
        inValidMessage: string;
        handleChangeFunctions: React.Dispatch<React.SetStateAction<T>>;
        validateFunction: Function;
    }
}
