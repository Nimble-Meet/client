import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('access_token')?.value;

    if (request.nextUrl.pathname.startsWith('/auth/signIn') && cookie) {
        return NextResponse.redirect(new URL('/', request.url));
    }
}

export const config = {
    matcher: ['/', '/auth/signIn']
};
