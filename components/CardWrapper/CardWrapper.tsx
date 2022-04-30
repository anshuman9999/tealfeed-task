import React from "react";
import { useAppContext } from "context/appContext";

import * as S from "./CardWrapper.styles";
import Card from "components/Card/Card";
import Spinner from "components/Spinner";

const CardWrapper = () => {
  const { matchData, loading } = useAppContext();

  if (loading) {
    return <Spinner />;
  }

  return (
    <S.CardsContainer>
      {matchData?.map((match) => (
        <Card
          match={match}
          matchNumber={match.matchNumber}
          totalMatches={matchData?.length || 0}
          key={match.id}
        />
      ))}
    </S.CardsContainer>
  );
};

export default CardWrapper;
