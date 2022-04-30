import React from "react";
import * as S from "./Spinnes.style";

const Spinner = () => {
  return (
    <S.SpinnerWrapper>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.SpinnerWrapper>
  );
};

export default Spinner;
