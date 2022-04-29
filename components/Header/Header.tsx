import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import Tabs from "components/Tabs";
import { tabs } from "data/index";
import * as S from "./Header.styles";
import { useAppContext } from "context";

const Header = () => {
  const { theme, setTheme } = useAppContext();
  const themeToSet = theme === "dark" ? "light" : "dark";

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
        <div
          onClick={() => {
            console.log("lmao");
            setTheme(themeToSet);
          }}
        >
          <AiOutlineClose size={20} />
        </div>
      </S.SearchWrapper>

      <Tabs tabs={tabs} />
    </S.HeaderWrapper>
  );
};

export default Header;
