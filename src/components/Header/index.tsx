/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { flexGrid } from "@/emotion/grid";
import { Button, Typography } from "nimble-nds";

const headerStyle = css`
  background-color: black;
  padding: 0.5rem 1rem;
`;

const Header = () => (
  <header
    css={css(
      flexGrid({
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }),
      headerStyle
    )}
  >
    <div>
      <Typography color="gray100" weight="lg" size="40px">
        Nimble Meet
      </Typography>
    </div>
    <Button>Try Free</Button>
  </header>
);

export default Header;
