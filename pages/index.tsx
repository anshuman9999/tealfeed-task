import type { NextPage } from "next";
import Header from "components/Header";
import Layout from "components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <div>Matches Component</div>
    </Layout>
  );
};

export default Home;
