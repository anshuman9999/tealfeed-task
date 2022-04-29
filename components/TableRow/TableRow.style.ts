import styled from "styled-components";

export const TableRowWrapper = styled.div`
  display: flex;
  width: 100%;
  color: #b8b9bd;
  border-top: 1px solid #93969d;
  padding: 10px 0;
`;

export const RowName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 60%;
`;

export const RowInfo = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  gap: 4px;

  & .last_5__result_container {
    width: 50%;
    display: flex;
    justify-content: center;
    gap: 2px;
  }
`;
