import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useMemo } from "react";
import * as S from "./Tab.style";

interface ITabProps {
  tab: ITab;
}

const Tab = ({ tab }: ITabProps) => {
  const router = useRouter();
  const activeTab = router.pathname === "/" ? "MATCHES" : "TABLE";

  const pageLink = useMemo(() => {
    if (tab.title === "MATCHES") return "/";

    return "/table";
  }, [tab.title]);

  return (
    <S.TabWrapper active={activeTab === tab.title}>
      <Link href={pageLink}>
        <a>{tab.title}</a>
      </Link>
    </S.TabWrapper>
  );
};

export default Tab;
