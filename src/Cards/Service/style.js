import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 20px;
  @media screen and (max-width: 978px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  flex: 1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  text-align: center;
  padding: 100px 0;
  line-height: 2;
`;

export const Logo = styled.div``;

export const Head = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;

export const Subhead = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
