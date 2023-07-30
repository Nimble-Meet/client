import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const layoutStyle = css`
    min-height: 10rem; // 160px

    border-right: 1px solid ${COLOR.gray100};
`;

export const descriptionStyle = css`
    padding: 1rem 2.5rem;
`;

export const mainStyle = css`
    padding: 1.5rem 2.5rem;

    border-top: 1px solid ${COLOR.gray100};
    border-bottom: 1px solid ${COLOR.gray100};

    height: calc(100vh - 422.5px);
    overflow: scroll;
`;
