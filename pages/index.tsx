import type { NextPage } from "next";
import Header from "components/Header";
import CardWrapper from "components/CardWrapper";
import dynamic from "next/dynamic";
import Head from "next/head";

const LayoutNoSSR = dynamic(() => import("components/Layout"), { ssr: false });

const Home: NextPage = () => (
  <>
    <Head>
      <title>Tealfeed Assignment | Anshuman Pandey</title>
    </Head>
    <LayoutNoSSR>
      <Header />
      <CardWrapper />
    </LayoutNoSSR>
  </>
);

export default Home;
