import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Header from "components/Header";
import Layout from "components/Layout";
import { AppProvider } from "context";

const Home: NextPage = () => {
  const [matchData, setMatchData] = useState<IMatchData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://gist.githubusercontent.com/hdck007/57650c774d9631c097db855bf110a4b6/raw/58b00de2a8c06831fda2f471e1b635a90208a4be/ipl.json"
      ).then((res) => res.json());

      setMatchData(data);
    };

    fetchData();
  }, []);

  return (
    <AppProvider
      value={{
        matchData,
        setMatchData,
      }}
    >
      <Layout>
        <Header />
        <div>Matches Component</div>
      </Layout>
    </AppProvider>
  );
};

export default Home;
