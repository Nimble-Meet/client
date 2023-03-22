/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const flexGrid = ({
    direction,
    justifyContent,
    alignItems,
    gap
}: {
    direction: string;
    justifyContent: string;
    alignItems: string;
    gap?: string;
}) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap};
`;
