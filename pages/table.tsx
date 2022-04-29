import type { NextPage } from "next";
import Header from "components/Header";
import Table from "components/Table";
import dynamic from "next/dynamic";

const LayoutNoSSR = dynamic(() => import("components/Layout"), { ssr: false });

const Home: NextPage = () => {
  return (
    <LayoutNoSSR>
      <Header />
      <Table />
    </LayoutNoSSR>
  );
};

export default Home;
