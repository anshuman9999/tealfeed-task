import React from "react";
import { getInitials } from "utils";
import * as S from "./Card.style";

interface ICardProps {
  match: IMatchData;
  matchNumber: number;
  totalMatches: number;
}

const Card = ({ match, matchNumber, totalMatches }: ICardProps) => {
  const { date, team1, team2, winner } = match;

  return (
    <S.CardWrapper>
      <div className="matchNumber__container">
        <span className="match_number">
          T20 {matchNumber} of {totalMatches}
        </span>
        <span className="date_container">{date}</span>
      </div>

      <div className="match_details__container">
        <span className={`${winner === team1 ? "winner-color" : ""}`}>
          {getInitials(team1)}
        </span>
        <span className={`${winner === team2 ? "winner-color" : ""}`}>
          {getInitials(team2)}
        </span>
      </div>
    </S.CardWrapper>
  );
};

export default Card;
