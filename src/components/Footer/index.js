import React from "react";
import { Column, Heading, Items, Mail, Main } from "./style";
import { Container, Wrapper, GlobalLink } from "../../styles/global";

const Footer = () => {
  return (
    <Container background="black">
      <Wrapper>
        <Main>
          <Column>
            <Heading>About Us</Heading>
            <Items>Just make it simple.</Items>
          </Column>
          <Column>
            <Heading>Business</Heading>
            <Items>
              <GlobalLink to="/" color="white" decoration="none">
                Sample
              </GlobalLink>
              <GlobalLink to="/" color="white" decoration="none">
                Sample
              </GlobalLink>
              <GlobalLink to="/" color="white" decoration="none">
                Sample
              </GlobalLink>
            </Items>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <GlobalLink to="/" color="white" decoration="none">
              Sample
            </GlobalLink>
          </Column>
          <Column>
            <Heading>Mail Us</Heading>
            <Mail type="text" placeholder="Enter a short message..." />
          </Column>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Footer;
