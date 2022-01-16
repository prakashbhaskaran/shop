import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Card from "../../Cards/Product";
import { ProductContext } from "../../Context/ProductProvider";
import Layout from "../../Layout";
import { Container } from "../../styles/global";
import { Grid } from "./style";

const Products = () => {
  const { items } = useContext(ProductContext);

  return (
    <Layout>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Container background="black">
        <Grid>
          {items.map((item) => {
            return <Card key={item.productid} item={item} />;
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Products;
