import styled from "styled-components";
import { primary } from "../../styles/Color";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  border: 2px solid ${primary};
  padding: 20px;
  background: black;
  color: white;
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 420px) {
    width: auto;
    height: auto;
  }
`;

export const Name = styled.p`
  text-transform: capitalize;
`;

export const Price = styled.p``;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  outline: none;
  border: hidden;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  font-size: 1.2em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
  }
`;
export const Remove = styled.button`
  color: white;
  outline: none;
  background: transparent;
  border: hidden;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  :hover {
    color: ${primary};
  }
`;

export const Number = styled.span``;
