import React, { useContext } from "react";
import Card from "../../Cards/Cart";
import { ProductContext } from "../../Context/ProductProvider";
import { Container, Div, GlobalLink, Wrapper } from "../../styles/global";
import Navbar from "../Navbar";

const Cart = () => {
  const { saved } = useContext(ProductContext);

  return (
    <Div>
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
              Go to shop
            </GlobalLink>
          </Wrapper>
        )}
      </Container>
    </Div>
  );
};

export default Cart;
