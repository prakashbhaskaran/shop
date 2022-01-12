import styled from "styled-components";
import { primary } from "../../styles/Color";

export const Container = styled.div`
  max-width: 300px;
  border: 4px solid ${primary};
  @media screen and (max-width: 420px) {
    max-width: 100%;
  }
`;

export const Image = styled.div`
  padding: 10px;
  width: 250px;
  height: 300px;
  margin: auto;
  @media screen and (max-width: 420px) {
    width: 100%;
    height: auto;
  }
`;

export const Name = styled.p`
  color: white;
  text-transform: capitalize;
  padding: 10px;
  font-size: 1.1em;
`;

export const Price = styled.p`
  color: white;
  padding: 10px;
  font-size: 1.1em;
`;

export const Button = styled.div`
  padding: 10px;
`;
export const Btn = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  background: transparent;
  border: 3px solid ${primary};
  font-weight: 600;
  font-size: 1.1em;
  cursor: pointer;
  :hover {
    background: ${primary};
    letter-spacing: 2px;
    transition: all 0.3s ease;
  }
`;
