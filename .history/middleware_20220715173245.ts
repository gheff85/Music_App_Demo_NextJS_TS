import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	// //Token will exist if User is logged in
	const token = await getToken({req, secret: process.env.JWT_SECRET});
	const {pathname} = req.nextUrl;

    //Allow the request if the token exists or one of the following paths
	
	
	if(token ||
	pathname.startsWith("/_next") || // Next.js internals
    pathname.startsWith("/api/auth") || //  API/auth routes
    pathname.startsWith("/static") || // static files
    /\.(.*)$/.test(pathname)
	){
		console.log("Allow");
		return NextResponse.next();
	}  // all files in the public folder


	//Redirect to login screen if User does not have a token And are requesting access to a protected route
	if(!token && pathname !== '/login') {
		return NextResponse.redirect(new URL('/login', req.url));
	}
};