'use client';
import { css } from '@emotion/react';

// components
import { FlexContainer, Typography } from 'nimble-ds';

// emotion
import { dividerStyle } from './Divider.style';

// Props type
export interface Props {
    width: number;
    value?: string;
}

const Divider = ({ width, value }: Props) => {
    if (value) {
        return (
            <FlexContainer
                alignItems="center"
                gap="0.25rem"
                customCss={css`
                    width: ${width}px;
                `}
            >
                <div css={dividerStyle(width / 2)} />
                <Typography size="12px" color="gray600" value={value} />
                <div css={dividerStyle(width / 2)} />
            </FlexContainer>
        );
    }

    return <div css={dividerStyle(width)} />;
};

export default Divider;
