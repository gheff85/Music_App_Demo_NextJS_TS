import { NextPage } from "next";
import { getProviders, signIn } from "next-auth/react";
import logo from "../public/images/Spotify-logo.png";
import { Provider } from "next-auth/providers";

const Login: NextPage<LoginProps> = () => (
<div className="flex flex-col items-center bg-black min-h-screen w-full just">
	<img className="w-52 mb-5" src={logo.src} alt="spotify-logo" />
</div>
);

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

type LoginProps = {
  providers: Provider[];
};
