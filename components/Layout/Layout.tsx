import { useAppContext } from "context";
import React from "react";
import * as S from "./Layout.style";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <S.LayoutContainer>{children}</S.LayoutContainer>;
};

export default Layout;
