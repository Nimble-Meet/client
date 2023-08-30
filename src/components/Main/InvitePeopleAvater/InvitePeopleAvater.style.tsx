import COLOR from '@/common/color';
import { css } from '@emotion/react';

export const layoutStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    width: 2.5rem; // 40px
    height: 2.5rem; // 40px
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 0 2px #fff;

    margin-left: -0.75rem;

    border: 2px solid ${COLOR.gray100};

    cursor: pointer;
`;
