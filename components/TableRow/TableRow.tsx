import React from "react";
import Image from "next/image";

import useTeam from "hooks/useTeam";
import { Cancel, Check } from "static/icons";

import { logos, teamMap } from "data";
import * as S from "./TableRow.style";
import { useAppContext } from "context/appContext";

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
  const { theme } = useAppContext();

  const teamInitial = teamMap[teamName];
  const logo = logos?.[teamInitial];

  return (
    <S.TableRowWrapper theme={theme}>
      <S.RowName>
        <span>{teamNumber}</span>
        <Image src={logo} alt={teamName} height={24} width={24} />
        <span>{teamInitial}</span>
      </S.RowName>
      <S.RowInfo>
        <span>{matchesPlayed}</span>
        <span>{matchesWon}</span>
        <span>{matchesLost}</span>
        <span>{totalPoints}</span>
        <div className="last_5__result_container">
          {lastFiveMatchesData?.map((data, index) => (
            <span key={index}>
              {data.won ? (
                <Check style={{ height: 16, width: 16 }} />
              ) : (
                <Cancel style={{ height: 16, width: 16 }} />
              )}
            </span>
          ))}
        </div>
      </S.RowInfo>
    </S.TableRowWrapper>
  );
};

export default TableRow;
