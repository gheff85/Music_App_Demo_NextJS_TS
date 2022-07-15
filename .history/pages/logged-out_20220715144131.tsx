import { NextPage } from "next";
import { getProviders, signIn } from "next-auth/react";
import logo from "../public/images/Spotify-logo.png";
import { Provider } from "next-auth/providers";

const Login: NextPage = () => (
  <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
    <img className="w-52 mb-5" src={logo.src} alt="spotify-logo" />

    {Object.values(providers).map((provider) => (
      <div>
        <button
          key={`provider-${provider.name}`}
          className="bg-[#18D860] text-white p-5 rounded-full"
          onClick={() => signIn(provider.id, { callbackUrl: "/" })}
        >
          Login with {provider.name}
        </button>
      </div>
    ))}
  </div>
);