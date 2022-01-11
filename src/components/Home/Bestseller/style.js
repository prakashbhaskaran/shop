import styled from "styled-components";

export const Head = styled.h1`
  color: white;
  margin-bottom: 60px;
  text-align: center;
`;
export const AllCards = styled.div`
  display: grid;
  justify-content: center;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: auto auto auto auto;
  @media screen and (max-width: 1280px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: auto;
  }
`;
