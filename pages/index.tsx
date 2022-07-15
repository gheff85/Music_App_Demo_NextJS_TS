import type { NextPage } from "next";
import Head from 'next/head';
import Sidebar from "../components/Sidebar/Sidebar";

const Home: NextPage = () => (
  <div className="bg-black h-screen overflow-hidden">
    <Head>
      <title>Music App Demo</title>
    </Head>
    <main>
      <Sidebar />
      {/* Center */}
    </main>
    <div>
      {/* Player */}
    </div>
  </div>
);

export default Home;