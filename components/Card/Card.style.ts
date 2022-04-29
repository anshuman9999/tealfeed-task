import styled from "styled-components";

export const CardWrapper = styled.div<{ theme: string }>`
  width: 100%;
  min-height: 140px;
  outline: 2px solid
    ${({ theme }) => (theme === "dark" ? "#3c4043" : "#f1f1f3")};
  background-color: ${({ theme }) => (theme === "dark" ? "#202124" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#93969d" : "#444")};
  padding: 16px;

  & .matchNumber__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .match_number {
      font-size: 14px;
    }

    & .date_container {
      font-size: 12px;
    }
  }

  & .match_details__container {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    & .team_name_img_container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    & .winner-color {
      color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    }
  }

  @media (max-width: 640px) {
    border-radius: 10px;
    min-height: 112px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => (theme === "dark" ? "#000" : "#eee")};
  }
`;
