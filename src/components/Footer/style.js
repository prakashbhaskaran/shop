import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
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
  gap: 1em;
`;

export const Heading = styled.h2`
  color: white;
  font-weight: 500;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  color: white;
`;
export const Mail = styled.input`
  max-width: 100%;
  min-height: 40px;
  padding-left: 10px;
  outline: none;
  border: hidden;
  font-size: 1.1em;
`;
