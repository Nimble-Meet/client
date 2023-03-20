/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import { flexGrid } from "@/emotion/grid";
import { Button, Typography } from "nimble-nds";

import ExplaneBox from "./subcomponents/ExplaneBox";
import PricingBox from "./subcomponents/PricingBox";

import CONSTANT from "./constants";

const landingStyle = css`
  background-color: black;
  height: 80vh;
  padding-left: 12rem;
  padding-right: 12rem;
`;

const imageStyle = css`
  width: 600px;
  height: 400px;

  background-color: blue;
`;

const imageStyle2 = css`
  width: 800px;
  height: 500px;

  background-color: blue;
`;

const Landing = () => (
  <main>
    <section
      css={css(
        flexGrid({
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }),
        landingStyle
      )}
    >
      <div
        css={flexGrid({
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        })}
      >
        <div>
          <Typography color="gray50" size="xxl" weight="lg">
            Nimble
            <br />
            Meet!
          </Typography>
        </div>
        <div
          css={flexGrid({
            direction: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "1rem",
          })}
        >
          <div>
            <Typography color="gray50" size="xxl" weight="lg">
              빠르게 미팅을 시작하고,
              <br />
              아이디어를 공유해보세요.
            </Typography>
          </div>
          <div
            css={flexGrid({
              direction: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            })}
          >
            <Button>Get Start</Button>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div css={imageStyle} />
    </section>
    <article
      css={css(
        flexGrid({
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
        }),
        {
          height: "500px",
          backgroundColor: "black",
          paddingRight: "12rem",
          paddingLeft: "12rem",
        }
      )}
    >
      {CONSTANT.EXPLANE.map((data) => (
        <ExplaneBox
          key={data?.title}
          title={data?.title}
          description={data?.description}
        />
      ))}
    </article>
    <article
      css={css(
        flexGrid({
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        }),
        {
          backgroundColor: "black",
        }
      )}
    >
      <div
        css={css(
          flexGrid({
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }),
          {
            height: "300px",
            backgroundColor: "black",
            paddingRight: "12rem",
            paddingLeft: "12rem",
            width: "100%",
          }
        )}
      >
        <Typography color="gray50" size="xxl" weight="lg">
          We are compony that has created a
          <br />
          meeting platform for everyone
        </Typography>
      </div>
      <div css={imageStyle2} />
    </article>
    <article
      css={css(
        flexGrid({
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        }),
        {
          backgroundColor: "black",
        }
      )}
    >
      <div
        css={css(
          flexGrid({
            direction: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "1rem",
          }),
          {
            height: "300px",
            backgroundColor: "black",
            width: "100%",
            paddingRight: "12rem",
            paddingLeft: "12rem",
          }
        )}
      >
        <Typography color="gray50" size="xxl" weight="lg">
          Our Pricing
        </Typography>
        <Typography color="gray500" size="md" weight="lg">
          We offer favorable conditions for your <br />
          comfotable and productive work.
        </Typography>
      </div>
      <div
        css={css(
          flexGrid({
            direction: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "3rem",
          }),
          {
            width: "100%",
            paddingRight: "12rem",
            paddingLeft: "12rem",
          }
        )}
      >
        {CONSTANT.PRICING.map((pricing) => (
          <PricingBox
            key={pricing.type}
            type={pricing.type}
            description={pricing.description}
            benefits={pricing.benefits}
          />
        ))}
      </div>
    </article>
  </main>
);

export default Landing;
