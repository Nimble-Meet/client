import { css } from '@emotion/react';

// components
import { Typography } from 'nimble-ds';

// emotion
import { actionButtonStyle } from './ActionButton.style';

import type { Props } from './ActionButton.type';

const ActionButton = ({ title }: Props.ActionButton) => {
    return (
        <div css={css(actionButtonStyle)}>
            <Typography value={title} color="gray800" />
        </div>
    );
};

export default ActionButton;
