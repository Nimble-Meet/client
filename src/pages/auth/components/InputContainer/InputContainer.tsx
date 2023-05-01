/** @jsxImportSource @emotion/react */
import React from 'react';

import { FlexContainer, Label, Input, Typography } from 'nimble-ds';

import { commonSetInputTextWithKey } from '../../utils/common';

import { ILogin, IUser } from '@/types/user';

type Props = {
    id: string;
    type: any;
    placeholder: string;
    labelText: string;
    inValidMessage: string;
    currentData: ILogin | IUser;
    handleChangeFunctions: Function;
    validateFunction: Function;
};

const InputContainer = ({
    id,
    type,
    placeholder,
    labelText,
    inValidMessage,
    currentData,
    handleChangeFunctions,
    validateFunction
}: Props) => {
    const [isValid, setIsValid] = React.useState(true);
    const [inputValue, setInputValue] = React.useState('');

    const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

        commonSetInputTextWithKey({
            handleChangeFunctions,
            currentData,
            key: id,
            value: e.target.value
        });
    };

    const validateInputValue = (value: string) => {
        const isValid = validateFunction(value);

        setIsValid(isValid);
    };

    React.useEffect(() => {
        if (!isValid) {
            validateInputValue(inputValue);
        }
    }, [inputValue]);

    return (
        <FlexContainer
            direction="column"
            alignItems="start"
            justifyContent="start"
            gap="0.5rem"
        >
            <Label htmlFor={id}>
                <Typography value={labelText} />
            </Label>
            <Input
                id={id}
                type={type}
                value={inputValue}
                onChange={updateInputValue}
                onBlur={() => validateInputValue(inputValue)}
                placeholder={placeholder}
                size="lg"
                width={250}
            />
            {!isValid && inputValue.length !== 0 && (
                <Typography value={inValidMessage} size="12px" color="red600" />
            )}
        </FlexContainer>
    );
};

export default InputContainer;
