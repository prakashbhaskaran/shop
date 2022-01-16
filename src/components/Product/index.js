import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductProvider";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Add, Grid, Image, Info, Name, Price } from "./style";
import { Container, Wrapper, Img } from "../../styles/global";
import Layout from "../../Layout";
import { Helmet } from "react-helmet";

const Product = () => {
  const { items, addtocart, removefromcart } = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();

  let item = items.filter((item) => item.productid === Number(id));
  if (isNaN(Number(id))) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Helmet>
        <title>Product - {id}</title>
      </Helmet>
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
              <Add
                onClick={() => addtocart(item[0].productid)}
                display={
                  item[0] === undefined
                    ? "none"
                    : item[0].added
                    ? "none"
                    : "block"
                }
              >
                Add to cart
              </Add>
              <Add
                onClick={() => removefromcart(item[0].productid)}
                display={
                  item[0] === undefined
                    ? "none"
                    : item[0].added
                    ? "block"
                    : "none"
                }
              >
                Remove from cart
              </Add>
              <Add
                onClick={() => {
                  navigate(-1);
                }}
              >
                Go back
              </Add>
            </Info>
          </Grid>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Product;
