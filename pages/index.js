import Head from "next/head";
import { WelcomeModal } from "../src/components/WelcomeModal";

export default function Home() {
  return (
    <>
      {/* meta data for page */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* wizard form component */}
      <WelcomeModal />
    </>
  );
}
