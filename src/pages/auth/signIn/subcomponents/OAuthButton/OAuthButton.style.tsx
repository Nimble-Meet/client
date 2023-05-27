import { css } from '@emotion/react';

export const oauthButtonStyle = (bgColor: string) => css`
    width: 3rem;
    height: 3rem;
    background-color: ${bgColor};
    border-radius: 0.75rem;

    cursor: pointer;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
