import styled from "styled-components";
import { primary } from "../../styles/Color";

export const Container = styled.div`
  max-width: 100%;
  min-height: 80px;
  top: 0;
  position: sticky;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

export const List = styled.ul`
  display: flex;
  gap: 50px;
  background-color: black;

  @media screen and (max-width: 540px) {
    box-shadow: 0 4px 6px 0px ${primary};
    position: absolute;
    width: 100%;
    left: 0;
    gap: 0px;
    top: 80px;
    flex-direction: column;
    overflow: hidden;
    max-height: ${(props) => (props.click ? "400px" : "0px")};
    transition: all 0.7s linear;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.2em;
  color: white;

  @media screen and (max-width: 540px) {
    padding: 10px;
  }
`;

export const NavIcon = styled.div`
  cursor: ${(props) => props.cursor};
  display: none;
  color: white;
  transition: all 0.3s linear;
  :hover {
    color: ${primary};
  }
  @media screen and (max-width: 540px) {
    display: initial;
  }
`;
