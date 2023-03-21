/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import { Button, Typography } from "nimble-nds";

const PricingBoxStyle = css`
  flex: 1;
  height: 500px;

  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 2rem;
  background-color: black;
  border: 2px solid #393939;
`;

const container = css`
  height: 112px;
  border-bottom: 1px solid #393939;
  margin-bottom: 1rem;
`;

const benefitsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 2rem;
`;

type Props = {
  type: string;
  description: string;
  benefits: string[];
  price: number;
  disabled: boolean;
};

const PricingBox = ({
  type,
  description,
  benefits,
  price,
  disabled,
}: Props) => (
  <div css={PricingBoxStyle}>
    <div css={container}>
      <div>
        <Typography color="gray50" size="40px" weight="lg">
          {type}
        </Typography>
      </div>
      <div>
        <Typography color="gray500" size="16px" weight="lg">
          {description}
        </Typography>
      </div>
    </div>
    <div css={benefitsStyle}>
      {benefits.map((benefit) => (
        <div key={benefit}>
          <Typography color="gray300" size="20px" weight="md">
            ✔️ {benefit}
          </Typography>
        </div>
      ))}
    </div>
    <div>
      <Typography color="gray50" size="32px" weight="lg">
        ${price}
      </Typography>
      <Typography color="gray500" size="20px" weight="lg">
        {" "}
        /month
      </Typography>
    </div>
    <Button size="big" theme="secondary" disabled={disabled}>
      {disabled ? "Coming soon" : "Buy Now"}
    </Button>
  </div>
);

export default PricingBox;
