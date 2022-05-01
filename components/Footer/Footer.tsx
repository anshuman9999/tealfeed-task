import React from "react";
import { GitHub, Linkedin } from "static/icons";
import { useAppContext } from "context/appContext";
import * as S from "./Footer.style";

const Footer = () => {
  const { theme } = useAppContext();

  return (
    <S.FooterContainer theme={theme}>
      <div className="footer__container">
        <div className="footer__heading">
          <span>
            Made by <span style={{ fontWeight: 600 }}>Anshuman Pandey</span>
          </span>
        </div>
        <div className="footer__icons">
          <a
            href="https://github.com/anshuman9999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub style={{ height: 20, width: 20 }} />
          </a>
          <a
            href="https://linkedin.com/in/anshuman9999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin style={{ height: 20, width: 20 }} />
          </a>
        </div>
      </div>
    </S.FooterContainer>
  );
};

export default Footer;
