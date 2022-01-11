import styled from "styled-components";
import { primary } from "../../../styles/Color";

export const Sentence = styled.p`
  text-align: center;
  line-height: 2;
  font-size: 4rem;
  font-family: monospace;
  background-image: linear-gradient(to left, ${primary} 50%, black 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 1280px) {
    font-size: 2rem;
  }
`;
