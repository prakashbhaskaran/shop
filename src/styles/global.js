import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary } from "./Color";

const Container = styled.div`
  padding: 120px;
  background: ${(props) => props.background};
  @media screen and (max-width: 540px) {
    padding: 120px 10px;
  }
`;

const Div = styled.div``;

const GlobalLink = styled(Link)`
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.decoration};
  font-size: ${(props) => props.font};
  width: ${(props) => props.width};

  :hover {
    color: ${primary};
    transition: color 0.3s linear;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Icon = styled.div`
  cursor: ${(props) => props.cursor};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  @media screen and (max-width: 1280px) {
    max-width: initial;
  }
`;

export { Container, GlobalLink, Icon, Wrapper, Div };
