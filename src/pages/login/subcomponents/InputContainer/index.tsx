/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import { FlexContainer, Label, Input } from 'nimble-ds';

type Props = {
    id: string;
    labelText: string;
    placeholder: string;
    setInputTextWithKey: any;
};

const InputContainer = ({
    id,
    labelText,
    setInputTextWithKey,
    placeholder
}: Props) => {
    const [inputValue, setInputValue] = useState('');

    const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setInputTextWithKey(id, e.target.value);
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
                value={inputValue}
                onChange={updateInputValue}
                placeholder={placeholder}
            />
        </FlexContainer>
    );
};

export default InputContainer;
