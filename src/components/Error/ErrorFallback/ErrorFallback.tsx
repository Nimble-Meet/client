'use client';

import COLOR from '@/common/color';
import { FlexContainer, Button, Typography } from 'nimble-ds';

import { BiCommentError } from 'react-icons/bi';

import { layoutStyle } from './ErrorFallback.style';

const ErrorFallback = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <FlexContainer
            justifyContent="center"
            alignItems="center"
            direction="column"
            customCss={layoutStyle}
            gap="1.25rem"
        >
            <BiCommentError size="5rem" color={COLOR.red300} />
            <FlexContainer alignItems="center" direction="column" gap="0.5rem">
                <Typography
                    value="예상치 못한 문제가 발생했습니다."
                    size="2rem"
                    weight="lg"
                />
                <Typography
                    value="잠시 후 다시 시도해 주세요."
                    size="1.25rem"
                />
            </FlexContainer>
            <Button color="basic" size="lg" onClick={refreshPage}>
                새로고침
            </Button>
        </FlexContainer>
    );
};

export default ErrorFallback;
