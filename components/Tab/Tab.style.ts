import styled from "styled-components";

export const TabWrapper = styled.li<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px 2px 0 0;
  }

  border-bottom: 4px solid;
  border-color: ${({ active }) => (active ? "#fff" : "transparent")};

  & a {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
`;
