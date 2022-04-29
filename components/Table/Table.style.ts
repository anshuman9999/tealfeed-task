import styled from "styled-components";

export const TableWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableMainContainer = styled.div`
  width: 100%;
  max-width: 752px;
  height: 100%;
  background-color: #202124;
  color: #fff;
  outline: 1px solid;
  padding-top: 120px;
  padding-left: 16px;
  padding-right: 16px;

  & .table__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    color: #93969d;
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
