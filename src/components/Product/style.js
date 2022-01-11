import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  @media screen and (max-width: 786px) {
    grid-auto-flow: row;
    grid-row-gap: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Image = styled.div`
  width: 400px;
  height: 600px;
  margin: auto;
  position: relative;
  overflow: hidden;
  background: #c1c1c1;
  ::before {
  content: "";
  position: absolute;
  display: ${(props) => (props.display ? "none" : "block")};
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent, #d7d7d7, transparent);
  transform: translateX(-100%);
  animation: loading 0.5s infinite;
  }
  @keyframes loading {
  100% {
    transform: translateX(100%);
  }
  @media screen and (max-width: 978px) {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.p`
  color: white;
  text-transform: capitalize;
  font-size: 1.2em;
  font-weight: 600;
`;

export const Price = styled.p`
  color: white;
  font-size: 1.2em;
  font-weight: 600;
`;

export const Add = styled.button`
  font-weight: 600;
  width: 100%;
  height: 40px;
  color: white;
  background: transparent;
  border: 3px solid #dc3545;
  cursor: pointer;
  font-size: 1em;
  :hover {
    background: #dc3545;
    letter-spacing: 2px;
    transition: all 0.3s ease;
  }
`;
