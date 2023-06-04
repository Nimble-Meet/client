import React from 'react';

import { FlexContainer, Label, Input, Typography } from 'nimble-ds';

import { setInputTextWithKey } from '@/utils/Auth/common';

import type { IUserLogin, IUserSignUp } from 'UserInterfaces';

import type { Props } from './InputContainer.type';

const InputContainer = <T extends IUserSignUp | IUserLogin>({
    id,
    type,
    placeholder,
    labelText,
    inValidMessage,
    handleChangeFunctions,
    validateFunction
}: Props.InputContainer<T>) => {
    const [isValid, setIsValid] = React.useState(true);
    const [inputValue, setInputValue] = React.useState('');

    const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

        setInputTextWithKey({
            key: id,
            value: e.target.value,
            handleChangeFunctions
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
        <FlexContainer direction="column" gap="0.5rem">
            <Label htmlFor={id}>
                <Typography value={labelText} size="14px" />
            </Label>
            <Input
                id={id}
                type={type}
                value={inputValue}
                onChange={updateInputValue}
                onBlur={() => validateInputValue(inputValue)}
                placeholder={placeholder}
                size="lg"
                width={256}
                invalid={!isValid && inputValue.length !== 0}
                invalidMessage={inValidMessage}
            />
        </FlexContainer>
    );
};

export default InputContainer;
