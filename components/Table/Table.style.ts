import styled from "styled-components";

export const TableWrapper = styled.div<{ theme: string }>`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableMainContainer = styled.div<{ theme: string }>`
  width: 100%;
  max-width: 752px;
  height: 100%;
  background-color: ${({ theme }) => (theme === "dark" ? "#202124" : "#fff")};
  border: 2px solid ${({ theme }) => (theme === "dark" ? "" : "#f1f1f3")};
  padding-top: 150px;
  padding-left: 16px;
  padding-right: 16px;
  transition: background-color ease 0.1s;

  & .table__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    color: ${({ theme }) => (theme === "dark" ? "#93969d" : "#70757a")};
    font-size: 12px;

    & .table__header__name {
      width: 60%;

      @media (max-width: 640px) {
        width: 40%;
      }
    }

    & .table__header__info {
      width: 40%;

      @media (max-width: 640px) {
        width: 60%;
      }

      display: flex;
      justify-content: space-between;
      gap: 4px;

      & .last_5__container {
        width: 50%;
        text-align: center;
      }
    }
  }
`;
