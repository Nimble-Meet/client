import Link from 'next/link';
import { css } from '@emotion/react';

// components
import { Typography } from 'nimble-ds';

// emotion
import { navigationButtonStyle } from './NavigationButton.style';

import type { Props } from './NavigationButton.type';

const NavigationButton = ({ title, urn }: Props.NavigationButton) => {
    return (
        <Link href={urn} css={css(navigationButtonStyle)}>
            <Typography value={title} />
        </Link>
    );
};

export default NavigationButton;
