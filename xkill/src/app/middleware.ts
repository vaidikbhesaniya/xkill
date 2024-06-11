import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/dashboard/*'],
};

export default withAuth(async (req) => {
  const token = req.nextauth.token;
  if (!token) {
    return NextResponse.redirect(new URL('/invalidsession', req.url));
  }

  const user = await fetch(
    `${process.env.NEXTAUTH_URL}/api/user?token=${token.jwtToken}`,
  );

  const json = await user.json();
  if (!json.user) {
    return NextResponse.redirect(new URL('/invalidsession', req.url));
  }
});
