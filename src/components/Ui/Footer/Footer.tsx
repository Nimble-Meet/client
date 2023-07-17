'use client';
// components
import { Typography, FlexContainer } from 'nimble-ds';

// emotion
import { footerStyle, footerContentsStyle } from './Footer.style';

// constants
import { FOOTER_INFO } from './constants';

const Footer = () => (
    <footer css={footerStyle}>
        <FlexContainer
            justifyContent="between"
            gap="0.5rem"
            customCss={footerContentsStyle}
        >
            <FlexContainer direction="column" gap="0.5rem">
                {FOOTER_INFO.INTRO.map((text, i) => (
                    <Typography
                        key={i}
                        color={text.color}
                        weight={text.weight}
                        size={text.size}
                        value={text.value}
                    />
                ))}
            </FlexContainer>
            <FlexContainer direction="column" gap="0.5rem">
                <div>
                    {FOOTER_INFO.CEO.map((text, i) => (
                        <Typography
                            key={i}
                            color={text.color}
                            weight={text.weight}
                            size={text.size}
                            value={text.value}
                        />
                    ))}
                </div>
                <div>
                    {FOOTER_INFO.CS.map((text, i) => (
                        <Typography
                            key={i}
                            color={text.color}
                            weight={text.weight}
                            size={text.size}
                            value={text.value}
                        />
                    ))}
                </div>
            </FlexContainer>
            <FlexContainer direction="column" alignItems="end" gap="0.5rem">
                {FOOTER_INFO.TERMS.map((text, i) => (
                    <Typography
                        key={i}
                        color={text.color}
                        weight={text.weight}
                        size={text.size}
                        value={text.value}
                    />
                ))}
            </FlexContainer>
        </FlexContainer>
    </footer>
);

export default Footer;
