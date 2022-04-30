import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { AppProvider } from "context";
import useLocalStorage from "hooks/useLocalStorage";

function MyApp({ Component, pageProps }: AppProps) {
  const [matchData, setMatchData] = useState<IMatchData[] | []>([]);
  const [initialMatchData, setInitialMatchData] = useState<IMatchData[] | []>(
    []
  );

  const [loading, setLoading] = useState(true);

  const [theme = "dark", setTheme = () => {}] =
    useLocalStorage("theme", "dark") || [];

  const fetchData = async () => {
    const data = await fetch(
      "https://gist.githubusercontent.com/hdck007/57650c774d9631c097db855bf110a4b6/raw/58b00de2a8c06831fda2f471e1b635a90208a4be/ipl.json"
    ).then((res) => res.json());

    setMatchData(data);
    setInitialMatchData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const winnersList = matchData
    ?.map((match) => match.winner)
    .filter((winner) => winner);

  const winnerFrequency: Record<string, number> = {};

  for (const winner of winnersList) {
    winnerFrequency[winner] = winnerFrequency[winner]
      ? winnerFrequency[winner] + 1
      : 1;
  }

  return (
    <AppProvider
      value={{
        matchData,
        setMatchData,
        winnerFrequency,
        theme,
        setTheme,
        fetchData,
        loading,
        initialMatchData,
      }}
    >
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
