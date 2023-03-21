/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { flexGrid } from "@/emotion/grid";
import { Typography } from "nimble-nds";

const footerStyle = css`
  background-color: black;
  height: 10rem;
  width: 100%;
`;

const Footer = () => (
  <footer
    css={css(
      flexGrid({
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }),
      footerStyle
    )}
  >
    <Typography color="gray100" weight="lg" size="40px">
      footer
    </Typography>
  </footer>
);

export default Footer;
