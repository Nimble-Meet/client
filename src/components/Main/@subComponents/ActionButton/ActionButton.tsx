import React from 'react';
import { css } from '@emotion/react';

import { Typography } from 'nimble-ds';
import { actionButtonStyle } from './ActionButton.style';

type Props = {
    title: string;
};
const ActionButton = ({ title }: Props) => {
    return (
        <div css={css(actionButtonStyle)}>
            <Typography value={title} color="gray800" />
        </div>
    );
};

export default ActionButton;
