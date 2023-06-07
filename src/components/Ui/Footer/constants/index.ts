import type { Color, Weight } from 'FontInterface';

export const FOOTER_INFO = {
    INTRO: [
        {
            color: 'gray300' as Color,
            weight: 'lg' as Weight,
            size: '16px',
            value: '(주) Nimble'
        },
        {
            color: 'gray600' as Color,
            weight: 'lg' as Weight,
            size: '12px',
            value: '경기도 성남시 분당구 판교로 242 PDC A동'
        },
        {
            color: 'gray600' as Color,
            weight: 'lg' as Weight,
            size: '14px',
            value: 'Copyright © 2023 Nimble Inc.'
        }
    ],
    CEO: [
        {
            color: 'gray300' as Color,
            weight: 'lg' as Weight,
            size: '14px',
            value: '대표 : '
        },
        {
            color: 'gray600' as Color,
            weight: 'lg' as Weight,
            size: '14px',
            value: 'Nimbler'
        }
    ],
    CS: [
        {
            color: 'gray300' as Color,
            weight: 'lg' as Weight,
            size: '14px',
            value: '고객 문의 : '
        },
        {
            color: 'gray600' as Color,
            weight: 'lg' as Weight,
            size: '14px',
            value: 'nimbleTeam@gmail.com'
        }
    ],
    TERMS: [
        {
            color: 'gray300' as Color,
            weight: 'lg' as Weight,
            size: '14px',
            value: '서비스 이용약관'
        },
        {
            color: 'gray300' as Color,
            weight: 'lg' as Weight,
            size: '14px',
            value: '개인정보처리방침'
        }
    ]
};
