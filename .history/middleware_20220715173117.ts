import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	// //Token will exist if User is logged in
	const token = await getToken({req, secret: process.env.JWT_SECRET});
	const {pathname} = req.nextUrl;

    //Allow the request if the token exists or one of the following paths
	token ||
	pathname.startsWith("/_next") || // Next.js internals
    pathname.startsWith("/api/auth") || //  API/auth routes
    pathname.startsWith("/static") || // etatic files
    /\.(.*)$/.test(pathname)  // all files in the public folder

	if(pathname.includes('/api/auth') || pathname.includes('_next') || token){
		console.log("Allow");
		return NextResponse.next();
	}

	//Redirect to login screen if User does not have a token And are requesting access to a protected route
	if(!token && pathname !== '/login') {
		return NextResponse.redirect(new URL('/login', req.url));
	}
};