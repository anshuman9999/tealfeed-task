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
    border-bottom: 1px solid #eee;

    & .table__header__name {
      width: 60%;
    }

    & .table__header__info {
      width: 40%;
      display: flex;
      justify-content: flex-end;
      gap: 4px;
    }
  }
`;
