/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import { Typography } from "nimble-nds";

const ExplaneBoxStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 300px;

  padding: 2rem;

  position: relative;

  border-radius: 2rem;
  background-color: black;
  border: 2px solid #393939;
`;

const Image = css`
  height: 100px;
  width: 100px;

  border-radius: 1rem;
  background-color: #393939;
  border: none;
`;

type Props = {
  title: string;
  description: string;
};

const ExplaneBox = ({ title, description }: Props) => (
  <div css={ExplaneBoxStyle}>
    <div css={Image} />
    <div>
      <Typography color="gray50" size="24px" weight="lg" value={title} />
    </div>
    <div>
      <Typography color="gray500" size="16px" weight="lg" value={description} />
    </div>
  </div>
);

export default ExplaneBox;
