import React, { useContext } from "react";
import { Head, AllCards } from "./style";
import { Container, Wrapper } from "../../../styles/global";
import Card from "../../../Cards/Product";
import { ProductContext } from "../../../Context/ProductProvider";

const Bestseller = () => {
  const { items } = useContext(ProductContext);
  return (
    <Container background="black">
      <Wrapper>
        <Head>Best Seller</Head>
        <AllCards>
          {items.slice(0, 4).map((item) => {
            return <Card key={item.productid} item={item} />;
          })}
        </AllCards>
      </Wrapper>
    </Container>
  );
};

export default Bestseller;
