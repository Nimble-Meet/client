import { css } from '@emotion/react';

// components
import { FlexContainer, Typography } from 'nimble-ds';

import type { Props } from './AuthenticationMessage.type';

const AuthenticationMessage = ({
    suggestedText,
    actionText,
    moveHandler
}: Props.AuthenticationMessage) => {
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
