import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
	//Token will exist if User is logged in
	const token = await getToken({req, secret: process.env.JWT_SECRET});

    //Allow the request if the token exists
	const {pathname } = req.nextUrl

	if(pathname.inclu)
};