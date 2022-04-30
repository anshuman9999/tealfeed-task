import Spinner from "components/Spinner";
import TableRow from "components/TableRow";
import { useAppContext } from "context/appContext";
import React, { useEffect, useState } from "react";
import * as S from "./Table.style";

const Table = () => {
  const { theme, fetchData, winnerFrequency } = useAppContext();
  const [tableLoad, setTableLoad] = useState(true);

  const sortedTeamNames = Object.entries(winnerFrequency)
    .sort((a, b) => b[1] - a[1])
    .map((element) => element[0]);

  useEffect(() => {
    fetchData?.();
    setTableLoad(false);
  }, [fetchData]);

  if (tableLoad) return <Spinner />;

  return (
    <S.TableWrapper theme={theme}>
      <S.TableMainContainer theme={theme}>
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
