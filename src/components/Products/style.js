import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  @media screen and (max-width: 1440px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (max-width: 978px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: auto;
  }
`;
