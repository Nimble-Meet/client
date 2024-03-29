'use client';
import { css } from '@emotion/react';

// components
import { FlexContainer, Typography } from 'nimble-ds';

// Props type
interface Props {
    suggestedText: string;
    actionText: string;
    moveHandler: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AuthenticationMessage = ({
    suggestedText,
    actionText,
    moveHandler
}: Props) => {
    return (
        <FlexContainer alignItems="center" justifyContent="center" gap="0.5rem">
            <Typography color="gray600" value={suggestedText} size="14px" />
            <div
                onClick={moveHandler}
                css={css`
                    cursor: pointer;
                `}
            >
                <Typography color="blue500" value={actionText} size="14px" />
            </div>
        </FlexContainer>
    );
};

export default AuthenticationMessage;
