import React from "react";
import * as S from "./Tab.style";

interface ITabProps {
  tab: ITab;
}

const Tab = ({ tab }: ITabProps) => {
  return <S.TabWrapper active={tab.active}>{tab.title}</S.TabWrapper>;
};

export default Tab;
