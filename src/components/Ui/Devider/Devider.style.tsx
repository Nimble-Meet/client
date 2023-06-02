import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const deviderStyle = (width: number) => css`
    width: ${width}px;
    height: 1px;
    border-bottom: 1px solid ${COLOR.gray300};
`;
