import styled from "styled-components";

export const FooterContainer = styled.footer<{ theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  width: 100%;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};

  & .footer__container {
    width: 95%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    & .footer__heading {
      font-size: 1.2rem;
      font-weight: 500;
    }

    & .footer__icons {
      display: flex;
      gap: 8px;
      margin-top: 4px;
      font-size: 16px;

      & a {
        text-decoration: none;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
      }
      & a:visited {
        text-decoration: none;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
      }

      & a:focus {
        text-decoration: none;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
      }
    }
  }
`;
