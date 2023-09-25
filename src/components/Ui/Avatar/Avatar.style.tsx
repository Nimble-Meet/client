import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const layoutStyle  = (size: number) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background-color: ${COLOR.blue500};
    box-shadow: 0 0 0 2px #fff;

    border: 2px solid ${COLOR.gray100};
`;
