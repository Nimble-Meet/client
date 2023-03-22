/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type FlexGridProps = {
    direction: 'row' | 'column';
    justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between';
    alignItems: 'center' | 'flex-start' | 'flex-end' | 'space-between';
    gap?: string;
};

export const flexGrid = ({
    direction,
    justifyContent,
    alignItems,
    gap
}: FlexGridProps) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap};
`;
