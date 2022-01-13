import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary } from "./Color";

const Container = styled.div`
  padding: 8em;
  background: ${(props) => props.background};
  @media screen and (max-width: 540px) {
    padding: 4em 1em;
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

const Span = styled.span`
  position: ${(props) => props.position};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: ${(props) => props.text};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  display: ${(props) => props.display};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  @media screen and (max-width: 1280px) {
    max-width: initial;
  }
`;

export { Container, GlobalLink, Icon, Wrapper, Div, Span };
