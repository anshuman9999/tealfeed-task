import type { NextPage } from "next";
import Header from "components/Header";
import CardWrapper from "components/CardWrapper";
import dynamic from "next/dynamic";

const LayoutNoSSR = dynamic(() => import("components/Layout"), { ssr: false });

const Home: NextPage = () => {
  return (
    <LayoutNoSSR>
      <Header />
      <CardWrapper />
    </LayoutNoSSR>
  );
};

export default Home;
