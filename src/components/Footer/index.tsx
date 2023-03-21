/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { flexGrid } from "@/emotion/grid";
import { Typography } from "nimble-nds";

const footerStyle = css`
  background-color: black;
  height: 10rem;
  width: 100%;

  padding: 1rem 12rem;

  border-top: 1px solid #181818;
`;

const Footer = () => (
  <footer
    css={css(
      flexGrid({
        direction: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "0.5rem",
      }),
      footerStyle
    )}
  >
    <div
      css={flexGrid({
        direction: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "0.5rem",
      })}
    >
      <Typography color="gray300" weight="lg" size="16px">
        (주) Nimble
      </Typography>
      <Typography color="gray600" weight="lg" size="12px">
        경기도 성남시 분당구 판교로 242 PDC A동
      </Typography>
      <Typography color="gray600" weight="lg" size="14px">
        Copyright © 2023 Nimble Inc.
      </Typography>
    </div>
    <div
      css={flexGrid({
        direction: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "0.5rem",
      })}
    >
      <div>
        <Typography color="gray300" weight="lg" size="14px">
          대표 :{" "}
        </Typography>
        <Typography color="gray600" weight="lg" size="14px">
          NIMBLER
        </Typography>
      </div>
      <div>
        <Typography color="gray300" weight="lg" size="14px">
          고객 문의 :{" "}
        </Typography>
        <Typography color="gray600" weight="lg" size="14px">
          nimbleTeam@gmail.com
        </Typography>
      </div>
    </div>
    <div
      css={flexGrid({
        direction: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        gap: "0.5rem",
      })}
    >
      <div>
        <Typography color="gray300" weight="lg" size="14px">
          서비스 이용약관
        </Typography>
      </div>
      <div>
        <Typography color="gray300" weight="lg" size="14px">
          개인정보처리방침
        </Typography>
      </div>
    </div>
  </footer>
);

export default Footer;
