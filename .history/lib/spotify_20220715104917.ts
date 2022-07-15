import SpotifyWebApi from "spotify-web-api-node";
import { JWT } from "next-auth/jwt";
import SpotifyWebApi from "spotify-web-api-node";

const scopes=[
	"user-read-email",
	"playlist-read-private",
	"playlist-read-collaborative",
	"streaming",
	"user-read-private",
	"user-library-read",
	"user-read-playback-state",
	"user-read-currently-playing",
	"user-read-recently-played"
].join(',');

const params = {
	scope: scopes
};

const queryParamString = (new URLSearchParams(params)).toString();

export const LOGIN_URL = `httpd://accounts.spotify.com/autjorize?${queryParamString}`;

const spotifyWebApi = new SpotifyWebApi({
	clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
	clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
});

export const refreshAccessToken = async (token: JWT) => {
	try{
		spotifyWebApi.setAccessToken(token.accessToken);
		spotifyWebApi.setRefreshToken(token.refreshToken);

		const {body: refreshedToken } = await spotifyWebApi.refreshAccessToken();
		console.log("Refreshed Token is ", refreshedToken);

		return {
			...token,
			accessToken: refreshedToken.access_token,
			accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
			refreshToken: refreshedToken.re
		}
	}
}