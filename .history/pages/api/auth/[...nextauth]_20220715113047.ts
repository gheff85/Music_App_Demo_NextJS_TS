import NextAuth from "next-auth/next";
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
			const expireAt = account.expires_at ?
		}
	}
  }
});

