import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // //Token will exist if User is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  console.log("Path is ", pathname);
  const PUBLIC_FOLDER_ROOT = /^\/[^\/\.]*\.[^\/\.]*$/ //Regex to match a string a single forward slash at beginning of string (no other forward slashes) then match a single '.'
  //Allow the request if the token exists or one of the following
  //_next.js internals
  //API/auth routes
  //static files
  //all files in public folder

  if (
    token ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/static") ||
	/^\/[^\.]*\.[^\/]*$/.test(pathname)
    // /\.(.*)$/.test(pathname)
  ) {
	console.log("Allow");
    return NextResponse.next();
  }

  //Redirect to login screen if User does not have a token And are requesting access to a protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
