import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary } from "../../../styles/Color";

export const Background = styled.div`
  width: 100%;
  min-height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Button = styled(Link)`
  color: white;
  text-decoration: none;
  border: 4px solid white;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: 600;
  transition: all 0.3s ease;
  letter-spacing: 2px;
  :hover {
    color: ${primary};
    letter-spacing: 5px;
  }
`;
