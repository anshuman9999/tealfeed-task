import type { NextPage } from "next";

import Header from "components/Header";
import Layout from "components/Layout";
import CardWrapper from "components/CardWrapper";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <CardWrapper />
    </Layout>
  );
};

export default Home;
