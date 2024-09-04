import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('authToken');
  const isAuthenticated = token !== undefined;
 
  
  if (token) {
    return NextResponse.next()
  }
 
  
  return NextResponse.redirect(new URL('/vote', req.url))
}
 
export const config = {
  matcher: ['/cast-vote', '/cast-vote/:path*', '/admin', '/admin/:path*'],
}