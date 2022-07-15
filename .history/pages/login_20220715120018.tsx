import { NextPage } from "next";
import {getProviders, signIn} from "next-auth/react";
import logo from "../public/images/Spotify-logo.png";
import { Provider } from "next-auth/providers";

const Login: NextPage<LoginProps> = () =>(

);



type LoginProps = {
	providers: Provider[]
}