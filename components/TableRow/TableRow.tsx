import { logos, teamMap } from "data";
import useTeam from "hooks/useTeam";
import Image from "next/image";
import React from "react";
import * as S from "./TableRow.style";

interface ITableRowProps {
  teamName: string;
  teamNumber: number;
}

const TableRow = ({ teamName, teamNumber }: ITableRowProps) => {
  const {
    matchesPlayed,
    matchesLost,
    matchesWon,
    totalPoints,
    lastFiveMatchesData,
  } = useTeam(teamName);

  const teamInitial = teamMap[teamName];
  const logo = logos?.[teamInitial];

  return (
    <S.TableRowWrapper>
      <S.RowName>
        <span>{teamNumber}.</span>
        <Image src={logo} alt={teamName} height={24} width={24} />
        <span>{teamInitial}</span>
      </S.RowName>
    </S.TableRowWrapper>
  );
};

export default TableRow;
