import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('access_token')?.value;

    if (request.nextUrl.pathname.startsWith('/main') && !cookie) {
        return NextResponse.redirect(new URL('/auth/signIn', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/auth/signIn') && cookie) {
        return NextResponse.redirect(new URL('/main', request.url));
    }
}

export const config = {
    matcher: ['/main', '/auth/signIn']
};
