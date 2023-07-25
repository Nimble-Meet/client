import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const dividerStyle = (width: number) => css`
    width: ${width}px;
    height: 1px;
    border-bottom: 1px solid ${COLOR.gray300};
`;
