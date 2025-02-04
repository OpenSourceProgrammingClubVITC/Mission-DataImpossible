import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define protected routes


const isPublicRoute = createRouteMatcher([
  '/', // Protect all routes under /dashboard
  '/login(.*)', // Protect all routes under /profile
  '/start-login(.*)',
  '/start(.*)',
  '/questions(.*)',

]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // Await auth()

  // If the route is protected and the user is not signed in, redirect to sign-in
  if (!isPublicRoute(req) && !userId) {
    return NextResponse.redirect("https://mdi.ieeeras.ospcvitc.club/login/");
  }

  return NextResponse.next(); // Allow the request to proceed
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
