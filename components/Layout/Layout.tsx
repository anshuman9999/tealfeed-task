import React from "react";

import { useAppContext } from "context";
import * as S from "./Layout.style";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const { theme } = useAppContext();
  return <S.LayoutContainer theme={theme}>{children}</S.LayoutContainer>;
};

export default Layout;
