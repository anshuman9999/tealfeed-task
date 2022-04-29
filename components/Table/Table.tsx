import TableRow from "components/TableRow";
import { useAppContext } from "context";
import React from "react";
import * as S from "./Table.style";

const Table = () => {
  const { winnerFrequency } = useAppContext();
  const sortedTeamNames = Object.entries(winnerFrequency)
    .sort((a, b) => b[1] - a[1])
    .map((element) => element[0]);

  return (
    <S.TableWrapper>
      <S.TableMainContainer>
        <div className="table__header">
          <div className="table__header__name">Team</div>
          <div className="table__header__info">
            <span>M</span>
            <span>W</span>
            <span>L</span>
            <span>Pts</span>
            <span className="last_5__container">Last 5</span>
          </div>
        </div>

        {sortedTeamNames.map((teamName, index) => (
          <TableRow key={teamName} teamName={teamName} teamNumber={index + 1} />
        ))}
      </S.TableMainContainer>
    </S.TableWrapper>
  );
};

export default Table;
