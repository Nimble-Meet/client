/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const PricingBoxStyle = css`
  flex: 1;
  height: 500px;

  border-radius: 1rem;
  background-color: gray;
`;

type Props = {
  type: string;
  description: string;
  benefits: string[];
};

const PricingBox = ({ type, description, benefits }: Props) => (
  <div css={PricingBoxStyle}>
    <div>{type}</div>
    <div>{description}</div>
  </div>
);

export default PricingBox;
