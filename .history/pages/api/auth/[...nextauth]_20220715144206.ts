import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL, refreshAccessToken } from "../../../lib/spotify";

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages:{
	signIn: '/login'
	
  },
  callbacks:{
	async jwt({token, account, user}){
		//Initial sign in
		if(account && user) {
			const expireAt = account.expires_at ?? 0

			return {
				...token,
				accessToken: account.access_token,
				refreshToken: account.refresh_token,
				username: account.providerAccountId,
				accessTokenExpires: expireAt * 1000
			};
		}

		//Token is still valid
		if(Date.now() < token.accessTokenExpires) {
			console.log("Token is valid")
			return token;
		}

		//Access token has expired
		console.log("Token has expired.  Refreshing")
		return await refreshAccessToken(token);
	},
	session({session, token}) {
		session.user ??= {}
		session.user.accessToken = token.accessToken;
		session.user.refreshToken = token.refreshToken;
		session.user.username = token.username;

		return session;
	}
  }
});

declare module 'next-auth' {
	interface Session {
		user?: {
			accessToken?: string;
			refreshToken?: string;
			username?: string;
		}
	}
};

