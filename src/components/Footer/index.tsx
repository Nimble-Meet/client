/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { flexGrid } from '@/styles/grid';
import { Typography } from 'nimble-nds';

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
                direction: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '0.5rem'
            }),
            footerStyle
        )}
    >
        <div
            css={flexGrid({
                direction: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '0.5rem'
            })}
        >
            <Typography
                color="gray300"
                weight="lg"
                size="16px"
                value="(주) Nimble"
            />
            <Typography
                color="gray600"
                weight="lg"
                size="12px"
                value="경기도 성남시 분당구 판교로 242 PDC A동"
            />
            <Typography
                color="gray600"
                weight="lg"
                size="14px"
                value="Copyright © 2023 Nimble Inc."
            />
        </div>
        <div
            css={flexGrid({
                direction: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '0.5rem'
            })}
        >
            <div>
                <Typography
                    color="gray300"
                    weight="lg"
                    size="14px"
                    value="대표 : "
                />
                <Typography
                    color="gray600"
                    weight="lg"
                    size="14px"
                    value="Nimbler"
                />
            </div>
            <div>
                <Typography
                    color="gray300"
                    weight="lg"
                    size="14px"
                    value="고객 문의 : "
                />
                <Typography
                    color="gray600"
                    weight="lg"
                    size="14px"
                    value="nimbleTeam@gmail.com"
                />
            </div>
        </div>
        <div
            css={flexGrid({
                direction: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                gap: '0.5rem'
            })}
        >
            <div>
                <Typography
                    color="gray300"
                    weight="lg"
                    size="14px"
                    value="서비스 이용약관"
                />
            </div>
            <div>
                <Typography
                    color="gray300"
                    weight="lg"
                    size="14px"
                    value="개인정보처리방침"
                />
            </div>
        </div>
    </footer>
);

export default Footer;
