import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductProvider";
import { GlobalLink, Img } from "../../styles/global";
import {
  Button,
  Container,
  Image,
  Name,
  Number,
  Price,
  Quantity,
  Remove,
} from "./style";

const Card = ({ item }) => {
  const { removefromcart, increment, decrement } = useContext(ProductContext);

  return (
    <Container>
      <Image>
        <Img src={`${item.url}`} alt="" loading="lazy" />
      </Image>
      <GlobalLink to="/" color="white" decoration="none">
        <Name>{item.name}</Name>
      </GlobalLink>
      <Price>$ {item.price}</Price>
      <Quantity>
        <Button
          onClick={() => increment(item.productid)}
          bg="springgreen"
          color="white"
        >
          +
        </Button>
        <Number>{item.quantity}</Number>
        <Button
          onClick={() => decrement(item.productid)}
          bg="red"
          color="white"
        >
          -
        </Button>
      </Quantity>
      <Remove onClick={() => removefromcart(item.productid)}>Remove</Remove>
    </Container>
  );
};

export default Card;
