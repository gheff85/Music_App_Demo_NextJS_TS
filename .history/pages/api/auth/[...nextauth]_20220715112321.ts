import NextAuth from "next-auth/next";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL, refreshAccess } from "../../../lib/spotify";