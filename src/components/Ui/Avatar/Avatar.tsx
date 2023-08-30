'use client';
import COLOR from '@/common/color';
import Image, { StaticImageData } from 'next/image';

// component
import { Typography } from 'nimble-ds';

// emotion
import { layoutStyle } from './Avatar.style';

interface Props {
    nickname: string;
    imgSrc?: string | StaticImageData;
    isFirst?: boolean;
    zIndex?: number;
}

// TODO: 툴팁 구현 및 +, - 버튼 구현
const Avatar = ({ nickname, imgSrc, isFirst, zIndex }: Props) => {
    return imgSrc ? (
        <Image
            style={{
                borderRadius: '50%',
                border: `2px solid ${COLOR.gray100}`,
                marginLeft: isFirst ? 0 : '-0.75rem',
                zIndex: isFirst ? 100 : zIndex
            }}
            src={imgSrc}
            width={40}
            height={40}
            alt="profile"
        />
    ) : (
        <div css={layoutStyle}>
            <Typography value={nickname.substring(2)} color="gray100" />
        </div>
    );
};

export default Avatar;
