import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  min-height: 140px;
  outline: 1px solid;
  background-color: #202124;
  color: #93969d;
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

    & .winner-color {
      color: #fff;
    }
  }

  @media (max-width: 640px) {
    border-radius: 10px;
    min-height: 112px;
  }

  &:hover {
    cursor: pointer;
    background-color: #000;
  }
`;
