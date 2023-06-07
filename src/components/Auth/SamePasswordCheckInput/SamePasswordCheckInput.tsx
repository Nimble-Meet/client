import React from 'react';

// components
import { Typography, Label, Input, FlexContainer } from 'nimble-ds';

// util
import { validateSamePassword as validateFuction } from '@/utils/Auth/validation';

import type { Props } from './SamePasswordCheckInput.type';

const SamePasswordCheckInput = ({
    password,
    isSamePasswordValid,
    setIsSamePasswordValid
}: Props.SamePasswordCheckInput) => {
    const [passwordCheckValue, setPasswordCheckValue] = React.useState('');

    const validateSamePassword = (password: string, samePassword: string) => {
        const isValid = validateFuction(password, samePassword);

        setIsSamePasswordValid(isValid);
    };

    React.useEffect(() => {
        validateSamePassword(password, passwordCheckValue);
    }, [password, passwordCheckValue]);

    return (
        <FlexContainer direction="column" gap="0.5rem">
            <Label htmlFor="password_check">
                <Typography value="비밀번호 확인" size="14px" />
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
                width={256}
                invalid={
                    !isSamePasswordValid && passwordCheckValue.length !== 0
                }
                invalidMessage="비밀번호가 일치하지 않습니다."
            />
        </FlexContainer>
    );
};

export default SamePasswordCheckInput;
