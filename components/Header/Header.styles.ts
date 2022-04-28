import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #008081;
  color: #fff;
  box-shadow: 0px 5px 26px 0px rgb(0 0 0 / 22%),
    0px 20px 28px 0px rgb(0 0 0 / 30%);
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

  & .back__btn__container {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  & .search__input__container {
    width: 70%;

    input {
      width: 100%;
      border-radius: 5px;
      padding: 4px;
      border: none;
    }
  }
`;
