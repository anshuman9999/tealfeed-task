import React from "react";
import { useAppContext } from "context";

import * as S from "./CardWrapper.styles";
import Card from "components/Card/Card";

const CardWrapper = () => {
  const { matchData } = useAppContext();
  return (
    <S.CardsContainer>
      {matchData?.map((match, index) => (
        <Card
          match={match}
          matchNumber={index + 1}
          totalMatches={matchData?.length || 0}
          key={match.id}
        />
      ))}
    </S.CardsContainer>
  );
};

export default CardWrapper;
