import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const layoutStyle = css`
    width: 100%;
    min-height: 12rem;
    max-height: 12rem;

    border-radius: 1rem;
    border: 1px solid ${COLOR.gray100};

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

    text-decoration: none;

    padding: 1.5rem;
`;
