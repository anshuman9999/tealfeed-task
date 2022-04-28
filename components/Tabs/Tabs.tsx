import React from "react";

interface ITabsProps {
  tabs: ITab[];
}

const Tabs = ({ tabs }: ITabsProps) => {
  return (
    <div>
      {tabs.map((tab, index) => (
        <div key={index}>{tab.title}</div>
      ))}
    </div>
  );
};

export default Tabs;
