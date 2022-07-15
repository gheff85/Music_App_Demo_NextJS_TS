import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
	//Token will exist if 
	const token = await getToken({req, secret: process.env.JWT_SECRET});


};