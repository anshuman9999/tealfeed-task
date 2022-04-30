import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: teal;
  color: #fff;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.4);
  max-height: 150px;
  user-select: none;
`;

export const SearchWrapper = styled.div`
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  & .back__btn__container {
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 640px) {
      gap: 4px;
    }
  }

  & .search__input__container {
    width: 70%;
    color: #000;

    input {
      width: 100%;
      border-radius: 5px;
      padding: 4px;
      border: none;
    }
  }

  & .theme__btn {
    cursor: pointer;
  }
`;
