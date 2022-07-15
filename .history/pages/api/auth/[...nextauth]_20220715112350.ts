import NextAuth from "next-auth/next";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL, refreshAccessToken } from "../../../lib/spotify";

export default NextAuth({
	providers
});