import type { NextPage } from "next";
import Header from "components/Header";
import Layout from "components/Layout";
import Table from "components/Table";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Table />
    </Layout>
  );
};

export default Home;
