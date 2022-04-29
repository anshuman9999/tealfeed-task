import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

import Tabs from "components/Tabs";
import { tabs } from "data/index";
import * as S from "./Header.styles";
import { useAppContext } from "context";

const Header = () => {
  const { theme, setTheme } = useAppContext();
  const themeChangeHandler = () => {
    const themeToSet = theme === "dark" ? "light" : "dark";
    setTheme(themeToSet);
  };

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
        <div onClick={themeChangeHandler} className="theme__btn">
          {theme === "light" ? <BsSun size={20} /> : <FiMoon size={20} />}
        </div>
      </S.SearchWrapper>

      <Tabs tabs={tabs} />
    </S.HeaderWrapper>
  );
};

export default Header;
