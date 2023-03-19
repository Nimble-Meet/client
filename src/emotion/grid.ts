/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const flexGrid = ({
  direction,
  justifyContent,
  alignItems,
}: {
  direction: string;
  justifyContent: string;
  alignItems: string;
}) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;
