'use client';
// components
import { Typography } from 'nimble-ds';

// Props type
export interface Props {
    title: string;
    description: string;
}

const AuthGuide = ({ title, description }: Props) => {
    return (
        <>
            <Typography value={title} size="32px" />
            <Typography color="gray600" value={description} size="16px" />
        </>
    );
};

export default AuthGuide;
