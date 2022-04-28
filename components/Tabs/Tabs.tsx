import React from "react";
import Tab from "components/Tab/Tab";
import * as S from "./Tabs.styles";

interface ITabsProps {
  tabs: ITab[];
}

const Tabs = ({ tabs }: ITabsProps) => {
  return (
    <S.TabsWrapper>
      <ol className="list__container">
        {tabs.map((tab, index) => (
          <Tab tab={tab} key={index} />
        ))}
      </ol>
    </S.TabsWrapper>
  );
};

export default Tabs;
