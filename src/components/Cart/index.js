import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Card from "../../Cards/Cart";
import { ProductContext } from "../../Context/ProductProvider";
import { Container, Div, GlobalLink, Wrapper } from "../../styles/global";
import Navbar from "../Navbar";

const Cart = () => {
  const { saved } = useContext(ProductContext);

  return (
    <Div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Navbar />
      <Container>
        {saved.length !== 0 ? (
          <Wrapper>
            {saved.map((item) => {
              return <Card key={item.productid} item={item} />;
            })}
          </Wrapper>
        ) : (
          <Wrapper>
            <Div> Empty cart</Div>
            <GlobalLink color="black" to="/products">
              Go to products
            </GlobalLink>
          </Wrapper>
        )}
      </Container>
    </Div>
  );
};

export default Cart;
