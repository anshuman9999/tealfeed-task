import styled from "styled-components";

export const TableRowWrapper = styled.div<{ theme: string }>`
  display: flex;
  width: 100%;
  color: ${({ theme }) => (theme === "dark" ? "#b8b9bd" : "#000")};
  border-top: 2px solid
    ${({ theme }) => (theme === "dark" ? "#333" : "#f1f1f3")};
  padding: 10px 0;
  font-size: 14px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const RowName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 60%;

  @media (max-width: 640px) {
    width: 40%;
  }
`;

export const RowInfo = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  gap: 4px;

  @media (max-width: 640px) {
    width: 60%;
  }

  & .last_5__result_container {
    width: 50%;
    display: flex;
    justify-content: center;
    gap: 4px;
  }
`;
