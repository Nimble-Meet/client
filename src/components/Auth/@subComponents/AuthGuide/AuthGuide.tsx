'use client';
// components
import { Typography } from 'nimble-ds';

import type { Props } from './AuthGuide.type';

const AuthGuide = ({ title, description }: Props.AuthGuide) => {
    return (
        <>
            <Typography value={title} size="32px" />
            <Typography color="gray600" value={description} size="16px" />
        </>
    );
};

export default AuthGuide;
