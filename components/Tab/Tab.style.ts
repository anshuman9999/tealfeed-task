import styled from "styled-components";

export const TabWrapper = styled.li<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;

  border-bottom: ${({ active }) => active && "4px solid #fff"};

  & a {
    width: 100%;
    text-align: center;
  }
`;
