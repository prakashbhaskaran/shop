import React from "react";
import { Container, Logo, Item, Head, Subhead } from "./style";

import { GoGift } from "react-icons/go";
import { FiHeadphones } from "react-icons/fi";
import { BsWallet } from "react-icons/bs";

const Card = () => {
  return (
    <Container>
      <Item>
        <Logo>
          <BsWallet size={35} />
        </Logo>
        <Head>Money Back Guarantee</Head>
        <Subhead>Cash On Delivery</Subhead>
      </Item>
      <Item>
        <Logo>
          <GoGift size={35} />
        </Logo>
        <Head>Special Gift Card</Head>
        <Subhead>Offer special bonuses with gift</Subhead>
      </Item>
      <Item>
        <Logo>
          <FiHeadphones size={35} />
        </Logo>
        <Head>Best Online Support</Head>
        <Subhead>Call us 24/7 at 123-456-789</Subhead>
      </Item>
    </Container>
  );
};

export default Card;
