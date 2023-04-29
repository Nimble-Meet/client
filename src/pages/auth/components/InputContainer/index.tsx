/** @jsxImportSource @emotion/react */
import React from 'react';

import { FlexContainer, Label, Input } from 'nimble-ds';

import { commonSetInputTextWithKey } from '../../utils/common';

import { ILogin, IUser } from '@/types/user';

type Props = {
    id: string;
    type: any;
    labelText: string;
    placeholder: string;
    currentData: ILogin | IUser;
    handleChangeFunctions: Function;
};

const InputContainer = ({
    id,
    type,
    labelText,
    placeholder,
    currentData,
    handleChangeFunctions
}: Props) => {
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

    return (
        <FlexContainer
            direction="column"
            alignItems="start"
            justifyContent="start"
            gap="0.5rem"
        >
            <Label htmlFor={id}>{labelText}</Label>
            <Input
                id={id}
                type={type}
                value={inputValue}
                onChange={updateInputValue}
                placeholder={placeholder}
            />
        </FlexContainer>
    );
};

export default InputContainer;
