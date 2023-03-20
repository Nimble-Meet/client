/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const ExplaneBoxStyle = css`
  flex: 1;
  height: 300px;

  border-radius: 1rem;
  background-color: gray;
`;

type Props = {
  title: string;
  description: string;
};

const ExplaneBox = ({ title, description }: Props) => (
  <div css={ExplaneBoxStyle}>
    <div>{title}</div>
    <div>{description}</div>
  </div>
);

export default ExplaneBox;
