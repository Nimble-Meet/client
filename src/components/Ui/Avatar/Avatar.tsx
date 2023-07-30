'use client';

import Image, { StaticImageData } from 'next/image';

import COLOR from '@/common/color';

interface Props {
    nickname: string;
    imgSrc: string | StaticImageData;
    isFirst?: boolean;
}

// TODO: 툴팁 구현 및 +, - 버튼 구현
const Avatar = ({ nickname, imgSrc, isFirst }: Props) => {
    return (
        <Image
            style={{
                borderRadius: '50%',
                border: `2px solid ${COLOR.gray100}`,
                marginLeft: isFirst ? 0 : '-0.75rem'
            }}
            src={imgSrc}
            width={40}
            height={40}
            alt="profile"
        />
    );
};

export default Avatar;
