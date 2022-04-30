import { useAppContext } from "context/appContext";

const useTeam = (teamName: string) => {
  const { matchData } = useAppContext();

  const teamMatchData = matchData?.filter((match) => {
    if (!match.winner) return false;
    if (match.team1 === teamName || match.team2 === teamName) return true;
    return false;
  });

  const matchesPlayed = teamMatchData?.length;
  const matchesWon = teamMatchData?.filter(
    (match) => match.winner === teamName
  ).length;
  const matchesLost = matchesPlayed - matchesWon;

  const lastFiveMatchesData = teamMatchData
    .slice(-5)
    .map((match) => {
      if (match.winner === teamName) return { won: true };
      else return { won: false };
    })
    .reverse();

  const totalPoints = matchesWon * 2;

  return {
    teamMatchData,
    matchesPlayed,
    matchesWon,
    matchesLost,
    lastFiveMatchesData,
    totalPoints,
  };
};

export default useTeam;
