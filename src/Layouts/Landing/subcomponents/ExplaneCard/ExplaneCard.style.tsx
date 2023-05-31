import { css } from '@emotion/react';

import COLOR from '@/common/color';

export const explaneCardStyle = css`
    position: relative;
    height: 300px;

    flex: 1;

    padding: 2rem;

    border-radius: 2rem;
    background-color: ${COLOR.softBlack};
    border: 2px solid ${COLOR.gray900};

    box-shadow: 0px 0px 8px ${COLOR.gray900};
`;

export const introIconStyle = css`
    height: 100px;
    width: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 1rem;
    background-color: ${COLOR.gray900};
    border: none;
`;
