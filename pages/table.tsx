import type { NextPage } from "next";
import Header from "components/Header";
import Table from "components/Table";
import dynamic from "next/dynamic";
import Head from "next/head";

const LayoutNoSSR = dynamic(() => import("components/Layout"), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tealfeed Assignment | Anshuman Pandey</title>
      </Head>
      <LayoutNoSSR>
        <Header />
        <Table />
      </LayoutNoSSR>
    </>
  );
};

export default Home;
