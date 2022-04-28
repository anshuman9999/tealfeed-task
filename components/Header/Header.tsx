import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import Tabs from "components/Tabs";
import { tabs } from "data/index";
import * as S from "./Header.styles";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.SearchWrapper>
        <div className="back__btn__container">
          <BsArrowLeft size={20} />
          IPL
        </div>
        <div className="search__input__container">
          <input type="text" placeholder="Enter team(s)" />
        </div>
        <div>
          <AiOutlineClose size={20} />
        </div>
      </S.SearchWrapper>

      <S.TabsWrapper>
        <Tabs tabs={tabs} />
      </S.TabsWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
