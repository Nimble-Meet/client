'use client';
import Link from 'next/link';
import { css } from '@emotion/react';

// components
import { Typography } from 'nimble-ds';

// emotion
import { navigationButtonStyle } from './NavigationButton.style';

// Props type
export interface Props {
    title: string;
    urn: string;
}

const NavigationButton = ({ title, urn }: Props) => {
    return (
        <Link href={urn} css={css(navigationButtonStyle)}>
            <Typography value={title} />
        </Link>
    );
};

export default NavigationButton;
