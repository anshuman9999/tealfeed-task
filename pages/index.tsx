import type { NextPage } from "next";
import Header from "components/Header";
import Layout from "components/Layout";
import { useState } from "react";

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState("Matches");

  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default Home;
