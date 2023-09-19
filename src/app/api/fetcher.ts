import { cookies } from 'next/headers';

export async function fetcher(method: string, url: string, options = {}) {
    const accessToken = cookies().get('access_token')?.value

    const option = {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        ...options
    }
  
    try {
        const response = await fetch(`http://localhost:3000${url}`, option);

        const data = await response.json();
  
        return data;
    } catch(e) {
        console.error(e);
    }
  }