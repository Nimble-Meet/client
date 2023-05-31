import React from 'react';
import { css } from '@emotion/react';

import {
    currentTimeContainerStyle,
    currentTimeTopStyle,
    currentTimeBottomStyle
} from './CurrentTimeContainer.style';
import { FlexContainer, Typography } from 'nimble-ds';

import { getTime } from './utils/time';

const CurrentTimeContainer = () => {
    const [{ year, month, day, time }, setCurrentTime] = React.useState(
        getTime()
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            const { year, month, day, time } = getTime();

            setCurrentTime({ year, month, day, time });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section css={css(currentTimeContainerStyle)}>
            <article css={css(currentTimeTopStyle)}>
                <FlexContainer
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="0.5rem"
                    customCss={css`
                        height: 100%;
                    `}
                >
                    <Typography value={time} size="32px" />
                    <FlexContainer alignItems="center" gap="0.5rem">
                        <Typography value={`${year}.`} size="16px" />
                        <Typography value={`${month}.`} size="16px" />
                        <Typography value={`${day}`} size="16px" />
                    </FlexContainer>
                </FlexContainer>
            </article>
            <div css={css(currentTimeBottomStyle)}>
                <FlexContainer
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="0.5rem"
                    customCss={css`
                        height: 100%;
                    `}
                >
                    <Typography
                        value="오늘 진행될 회의가 없습니다."
                        size="14px"
                        color="gray600"
                    />
                </FlexContainer>
            </div>
        </section>
    );
};

export default CurrentTimeContainer;
