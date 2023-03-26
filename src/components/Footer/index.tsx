/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { Typography, FlexContainer } from 'nimble-nds';

// emotion styles
import { footerStyle } from './footer.style';

const Footer = () => (
    <footer css={css(footerStyle)}>
        <FlexContainer
            direction="row"
            justifyContent="between"
            alignItems="start"
            gap="0.5rem"
        >
            <FlexContainer
                direction="column"
                justifyContent="start"
                alignItems="start"
                gap="0.5rem"
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
            </FlexContainer>
            <FlexContainer
                direction="column"
                justifyContent="start"
                alignItems="start"
                gap="0.5rem"
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
            </FlexContainer>
            <FlexContainer
                direction="column"
                justifyContent="start"
                alignItems="start"
                gap="0.5rem"
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
            </FlexContainer>
        </FlexContainer>
    </footer>
);

export default Footer;
