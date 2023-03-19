/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { flexGrid } from "@/emotion/grid";
import { Typography } from "nimble-nds";

const Header = () => (
  <header
    css={css(
      flexGrid({
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }),
      {
        backgroundColor: "black",
      }
    )}
  >
    <Typography color="gray100" weight="lg" size="xxl">
      Nimble Meet
    </Typography>
  </header>
);

export default Header;
