import React from "react";
import { ArrowLeft, Moon, Sun } from "static/icons";
import Select, { MultiValue } from "react-select";

import Tabs from "components/Tabs";
import { searchTeamOptions, tabs } from "data/index";
import * as S from "./Header.styles";
import { useAppContext } from "context/appContext";
import { useRouter } from "next/router";

const Header = () => {
  const { theme, setTheme, setMatchData, initialMatchData } = useAppContext();

  const router = useRouter();
  const isTable = router.pathname === "/table";

  const themeChangeHandler = () => {
    const themeToSet = theme === "dark" ? "light" : "dark";
    setTheme(themeToSet);
  };

  const filterDataHandler = (
    props: MultiValue<{
      value: string;
      label: string;
    }>
  ) => {
    if (isTable) {
      return;
    }
    if (!props || !props.length) {
      setMatchData(initialMatchData);
      return;
    }

    const newMatchData = props
      .map((prop) => {
        return initialMatchData.filter(
          (match) => match.team1 === prop.value || match.team2 === prop.value
        );
      })
      .flat(1);

    const filteredMatchData = Array.from(new Set([...newMatchData]));
    setMatchData(filteredMatchData);
  };

  return (
    <S.HeaderWrapper>
      <S.SearchWrapper>
        <div className="back__btn__container">
          <div className="back__btn" onClick={() => router.back()}>
            <ArrowLeft />
          </div>
          IPL
        </div>
        {!isTable && (
          <div className="search__input__container">
            <Select
              options={searchTeamOptions}
              isMulti
              onChange={filterDataHandler}
              placeholder="Enter Team(s)"
            />
          </div>
        )}
        <div onClick={themeChangeHandler} className="theme__btn">
          {theme === "light" ? <Sun /> : <Moon />}
        </div>
      </S.SearchWrapper>

      <Tabs tabs={tabs} />
    </S.HeaderWrapper>
  );
};

export default Header;
