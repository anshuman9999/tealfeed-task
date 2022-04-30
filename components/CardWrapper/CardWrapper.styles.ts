import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 120px;
  max-width: 752px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  margin: 0 auto;
  margin-bottom: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 100%;
    padding-left: 16px;
    padding-right: 16px;
    gap: 10px;
  }
`;
