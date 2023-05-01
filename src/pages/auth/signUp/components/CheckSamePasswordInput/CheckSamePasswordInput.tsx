import React from 'react';

import { Typography, Label, Input, FlexContainer } from 'nimble-ds';

import { validateSamePassword as validateFuction } from '@/pages/auth/utils/validation';

type Props = {
    password: string;
    isSamePasswordValid: boolean;
    setIsSamePasswordValid: Function;
};

const CheckSamePasswordInput = ({
    password,
    isSamePasswordValid,
    setIsSamePasswordValid
}: Props) => {
    const [passwordCheckValue, setPasswordCheckValue] =
        React.useState<string>('');

    const validateSamePassword = (password: string, samePassword: string) => {
        const isValid = validateFuction(password, samePassword);

        setIsSamePasswordValid(isValid);
    };

    React.useEffect(() => {
        validateSamePassword(password, passwordCheckValue);
    }, [password, passwordCheckValue]);

    return (
        <FlexContainer
            direction="column"
            alignItems="start"
            justifyContent="start"
            gap="0.5rem"
        >
            <Label htmlFor="password_check">
                <Typography value="Check Password" />
            </Label>
            <Input
                id="password_check"
                type="password"
                value={passwordCheckValue}
                onChange={(e) => setPasswordCheckValue(e.target.value)}
                onBlur={() =>
                    validateSamePassword(password, passwordCheckValue)
                }
                placeholder="비밀번호를 다시 입력해주세요."
                size="lg"
                width={250}
            />
            {!isSamePasswordValid && passwordCheckValue.length !== 0 && (
                <Typography
                    value="비밀번호가 일치하지 않습니다."
                    size="12px"
                    color="red600"
                />
            )}
        </FlexContainer>
    );
};

export default CheckSamePasswordInput;
