import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
	//Token will exist if User is logged in
	const token = await getToken({req, secret: process.env.JWT_SECRET});

    //Allow the request if the token exists or next-auth or provider fetching

	if(pathname.includes('/api/auth') || token){
		return NextResponse.next();
	}

	//Redirect to login screen if t
	if(!token && pathname !== '/login') {
		return NextResponse.redirect('/login');
	}
};