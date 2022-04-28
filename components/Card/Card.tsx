import React from "react";
import * as S from "./Card.style";

interface ICardProps {
  match: IMatchData;
}

const Card = ({ match }: ICardProps) => {
  return <S.CardWrapper>{match.winner}</S.CardWrapper>;
};

export default Card;
