import React, { useContext } from "react";
import { Button, Btn, Container, Image, Name, Price } from "./style";
import { Img } from "../../styles/global";
import { GlobalLink } from "../../styles/global";
import { ProductContext } from "../../Context/ProductProvider";

const Card = ({ item }) => {
  const { addtocart, removefromcart } = useContext(ProductContext);
  return (
    <Container>
      <Image>
        <Img src={`${item.url}`} alt="" loading="lazy" />
      </Image>
      <Name>{item.name}</Name>
      <Price>$ {item.price}</Price>
      {item.added ? (
        <Button onClick={() => removefromcart(item.productid)}>
          <Btn>Remove from Cart</Btn>
        </Button>
      ) : (
        <Button onClick={() => addtocart(item.productid)}>
          <Btn>Add to Cart</Btn>
        </Button>
      )}
      <Button>
        <GlobalLink to={`/products/${item.productid}`}>
          <Btn>View</Btn>
        </GlobalLink>
      </Button>
    </Container>
  );
};

export default Card;
