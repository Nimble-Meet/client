'use client';
import React from 'react';

// components
import { Label, Input, FlexContainer, Typography } from 'nimble-ds';

interface Props {
    id: string;
    labelText: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    size?: 'md' | 'lg' | 'xl';
    name?: string;
    invalid?: boolean;
    invalidMessage?: string;
    isRequired?: boolean;
}

const InputContainer = ({
    id,
    labelText,
    value,
    onChange,
    placeholder,
    size,
    name,
    invalid,
    invalidMessage,
    isRequired
}: Props) => {
    return (
        <FlexContainer direction="column" gap="0.5rem">
            <Label htmlFor={id}>
                {isRequired ? (
                    <FlexContainer alignItems="center" gap="0.25rem">
                        <Typography value={labelText} size="16px" />
                        <Typography value="*" size="16px" color="red500" />
                    </FlexContainer>
                ) : (
                    labelText
                )}
            </Label>
            <Input
                id={id}
                name={name}
                size={size}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                invalid={invalid}
                invalidMessage={invalidMessage}
            />
        </FlexContainer>
    );
};

export default InputContainer;
