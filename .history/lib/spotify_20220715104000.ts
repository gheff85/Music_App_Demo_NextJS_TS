import SpotifyWebApi from "spotify-web-api-node";
import { JWT } from "next-auth/jwt";

const scopes=[
	"user-read-email",
	"playlist-read-private",
	"playlist-read-collaborative",
	"streaming",
	"user-read-private",
	"user-library-read",
	"user-read-playback-state",
	"user-read-currently-playing"
]