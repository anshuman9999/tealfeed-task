interface ITab {
  title: string;
}

interface IMatchData {
  date: string;
  id: string;
  team1: string;
  team2: string;
  winner: string;
  matchNumber: number;
}

interface IContext {
  matchData: IMatchData[] | [];
  setMatchData: Dispatch<SetStateAction<IMatchData | []>>;
  winnerFrequency: Record<string, number>;
  theme: string;
  setTheme: (arg: string) => void;
  fetchData?: () => Promise<void>;
  loading: boolean;
  initialMatchData: IMatchData[] | [];
}

interface ISearchTerm {
  value: string;
  label: string;
}
