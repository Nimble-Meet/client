import { cookies } from 'next/headers';

export const fetcher = async (url: string, options = {}) => {
    const accessToken = cookies().get('access_token')?.value;

    const defaultOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    };

    const response = await fetch(`${process.env.REACT_APP_URL}${url}`, {
        ...defaultOptions,
        ...options
    });

    const data = await response.json();

    return data;
};
