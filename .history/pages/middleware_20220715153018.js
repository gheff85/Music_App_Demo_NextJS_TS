import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware (req) => {
	//Token will exist if User is logged in
	const token = await getToken({req, secret: process.env.JWT_SECRET});

	console.log("token is ", token);
    //Allow the request if the token exists or next-auth or provider fetching

	if(pathname.includes('/api/auth') || token){
		return NextResponse.next();
	}

	//Redirect to login screen if User does not have a token And are requesting access to a protected route
	if(!token && pathname !== '/login') {
		return NextResponse.redirect('/login');
	}
};