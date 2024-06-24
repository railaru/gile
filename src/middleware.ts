import { authMiddleware } from '@clerk/nextjs';
import { PAGE_ROUTES } from '@/constants/routes';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: [
        PAGE_ROUTES.SIGN_IN,
        PAGE_ROUTES.SIGN_UP,
        PAGE_ROUTES.HOME,        
    ],
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
