import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	//Token will exist if User is logged in
	const token = await getToken({req, secret: process.env.JWT_SECRET});
	const {pathname} = req.nextUrl;
	console.log("token is ", toke
	console.log("token")
    //Allow the request if the token exists or next-auth or provider fetching

	if(pathname.includes('/api/auth') || token){
		return NextResponse.next();
	}

	//Redirect to login screen if User does not have a token And are requesting access to a protected route
	if(!token && pathname !== '/login') {
		return NextResponse.redirect(new URL('/login', req.url));
	}
};