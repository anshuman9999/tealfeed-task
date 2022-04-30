import React from "react";
import { useAppContext } from "context";

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
      {matchData?.map((match, index) => (
        <Card
          match={match}
          matchNumber={index + 1}
          totalMatches={matchData?.length || 0}
          key={index}
        />
      ))}
    </S.CardsContainer>
  );
};

export default CardWrapper;
