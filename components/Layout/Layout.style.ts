import styled from "styled-components";

export const LayoutContainer = styled.div<{ theme: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => (theme === "dark" ? "#303134" : "#fff")};
  transition: background-color ease 0.3s;
`;
