'use client';

import React from 'react';

import { FlexContainer } from 'nimble-ds';

import { css } from '@emotion/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <FlexContainer
            customCss={css`
                height: 100vh;
            `}
        >
            {children}
        </FlexContainer>
    );
};

export default Layout;
