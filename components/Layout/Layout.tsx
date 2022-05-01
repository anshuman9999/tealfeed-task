import React from "react";

import { useAppContext } from "context/appContext";
import * as S from "./Layout.style";
import Footer from "components/Footer";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const { theme } = useAppContext();
  return (
    <S.LayoutContainer theme={theme}>
      {children}
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;
