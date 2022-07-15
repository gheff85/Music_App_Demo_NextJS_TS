declare module 'next-auth/jwt' {
	interface JWT {
		accessToken: string
		refreshToken: string
		username: string
		accessTokenExpires: number
	}
}