import React from "react";
import * as S from "./Table.style";

const Table = () => {
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
            <span>Last 5</span>
          </div>
        </div>
      </S.TableMainContainer>
    </S.TableWrapper>
  );
};

export default Table;