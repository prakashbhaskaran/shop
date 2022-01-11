import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductProvider";
import { useParams, Navigate } from "react-router-dom";
import { Add, Grid, Image, Info, Name, Price } from "./style";
import { Container, Wrapper, Img } from "../../styles/global";
import Layout from "../../Layout";

const Product = () => {
  const { items, addtocart, removefromcart } = useContext(ProductContext);
  const { id } = useParams();

  let item = items.filter((item) => item.productid === Number(id));
  if (isNaN(Number(id))) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      {" "}
      <Container background={"black"}>
        <Wrapper>
          <Grid>
            <Image display={`${item[0] === undefined}`}>
              <Img src={item[0] !== undefined ? `${item[0].url}` : ""} alt="" />
            </Image>
            <Info>
              <Name>
                {item[0] !== undefined ? `${item[0].name}` : "Loading..."}
              </Name>
              <Price>
                Rate : $
                {item[0] !== undefined ? `${item[0].price}` : "Loading..."}{" "}
              </Price>
              {!item[0].added ? (
                <Add onClick={() => addtocart(item[0].productid)}>
                  Add to cart
                </Add>
              ) : (
                <Add onClick={() => removefromcart(item[0].productid)}>
                  Remove from cart
                </Add>
              )}
            </Info>
          </Grid>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Product;
