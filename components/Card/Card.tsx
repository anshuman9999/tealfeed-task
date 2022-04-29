import { logos, teamMap } from "data";
import Image from "next/image";
import React from "react";
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
        <div className="team_name_img_container">
          <Image
            src={logos?.[`${teamMap?.[team1]}`]}
            alt={team1}
            width={24}
            height={24}
          />
          <span className={`${winner === team1 ? "winner-color" : ""}`}>
            {teamMap?.[team1]}
          </span>
        </div>
        <div className="team_name_img_container">
          <Image
            src={logos?.[`${teamMap?.[team2]}`]}
            alt={team2}
            width={24}
            height={24}
          />
          <span className={`${winner === team2 ? "winner-color" : ""}`}>
            {teamMap?.[team2]}
          </span>
        </div>
      </div>
    </S.CardWrapper>
  );
};

export default Card;
