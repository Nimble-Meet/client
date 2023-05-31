import { Typography, FlexContainer } from 'nimble-ds';

// emotion styles
import { footerStyle, footerContentsStyle } from './Footer.style';

import { isColor, isWeight } from '@/utils/typography';

import TEXT_DATA from './constants';

const Footer = () => (
    <footer css={footerStyle}>
        <FlexContainer
            justifyContent="between"
            gap="0.5rem"
            customCss={footerContentsStyle}
        >
            <FlexContainer direction="column" gap="0.5rem">
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
            <FlexContainer direction="column" gap="0.5rem">
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
            <FlexContainer direction="column" alignItems="end" gap="0.5rem">
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
