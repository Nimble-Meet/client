import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const layoutStyle = css`
    position: absolute;

    top: 44px;
    left: 0;

    padding: 1rem; // 16px

    z-index: 50;

    width: 18.5rem;

    background-color: white;
    border: 1px solid ${COLOR.gray300};
    border-radius: 0.5rem;
`;
