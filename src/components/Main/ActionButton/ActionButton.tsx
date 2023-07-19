'use client';
import { css } from '@emotion/react';

// components
import { Typography } from 'nimble-ds';

// emotion
import { actionButtonStyle } from './ActionButton.style';

// Props type
export interface Props {
    title: string;
}

const ActionButton = ({ title }: Props) => {
    return (
        <div css={css(actionButtonStyle)}>
            <Typography value={title} color="gray800" />
        </div>
    );
};

export default ActionButton;
