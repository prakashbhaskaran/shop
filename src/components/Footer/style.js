import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: auto auto auto auto;
  @media screen and (max-width: 1279px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Heading = styled.h2`
  color: white;
  font-weight: 500;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
`;
export const Mail = styled.input`
  max-width: 100%;
  height: 40px;
  padding-left: 10px;
  outline: none;
  border: hidden;
  font-size: 1.1em;
`;
