/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { Typography, FlexContainer } from 'nimble-ds';

// emotion styles
import { footerStyle } from './Footer.style';

import { isColor, isWeight } from '@/utils/typography';

import TEXT_DATA from './constants';

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
                {TEXT_DATA.INTRO.map((text) => (
                    <Typography
                        key={text.key}
                        color={isColor(text.color) ? text.color : undefined}
                        weight={isWeight(text.weight) ? text.weight : undefined}
                        size={text.size}
                        value={text.value}
                    />
                ))}
            </FlexContainer>
            <FlexContainer
                direction="column"
                justifyContent="start"
                alignItems="start"
                gap="0.5rem"
            >
                <div>
                    {TEXT_DATA.CEO.map((text) => (
                        <Typography
                            key={text.key}
                            color={isColor(text.color) ? text.color : undefined}
                            weight={
                                isWeight(text.weight) ? text.weight : undefined
                            }
                            size={text.size}
                            value={text.value}
                        />
                    ))}
                </div>
                <div>
                    {TEXT_DATA.CS.map((text) => (
                        <Typography
                            key={text.key}
                            color={isColor(text.color) ? text.color : undefined}
                            weight={
                                isWeight(text.weight) ? text.weight : undefined
                            }
                            size={text.size}
                            value={text.value}
                        />
                    ))}
                </div>
            </FlexContainer>
            <FlexContainer
                direction="column"
                justifyContent="start"
                alignItems="end"
                gap="0.5rem"
            >
                {TEXT_DATA.TERMS.map((text) => (
                    <Typography
                        key={text.key}
                        color={isColor(text.color) ? text.color : undefined}
                        weight={isWeight(text.weight) ? text.weight : undefined}
                        size={text.size}
                        value={text.value}
                    />
                ))}
            </FlexContainer>
        </FlexContainer>
    </footer>
);

export default Footer;
