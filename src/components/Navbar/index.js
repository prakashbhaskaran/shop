import React, { useContext, useState } from "react";
import { GlobalLink, Div } from "../../styles/global";
import { Container, List, ListItem, NavIcon } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrProductHunt } from "react-icons/gr";
import { ProductContext } from "../../Context/ProductProvider";
const Navbar = () => {
  const { saved } = useContext(ProductContext);
  const [click, setClick] = useState(false);

  return (
    <Container>
      <GlobalLink to="/" color="white" decoration="inherit">
        <GrProductHunt size={30} />
      </GlobalLink>

      <Div>
        <List
          click={click}
          onClick={() => {
            setClick(!click);
          }}
        >
          <ListItem>
            <GlobalLink
              to="/"
              color="inherit"
              decoration="inherit"
              font="inherit"
              width="100%"
            >
              Home
            </GlobalLink>
          </ListItem>
          <ListItem>
            <GlobalLink
              to="/products"
              color="inherit"
              decoration="inherit"
              font="inherit"
              width="100%"
            >
              Products
            </GlobalLink>
          </ListItem>
          <ListItem>
            <GlobalLink
              to="/cart"
              color="inherit"
              decoration="inherit"
              font="inherit"
              width="100%"
            >
              Cart ( {`${saved.length}`} )
            </GlobalLink>
          </ListItem>
        </List>
      </Div>
      <NavIcon
        cursor="pointer"
        onClick={() => {
          setClick(!click);
        }}
      >
        <GiHamburgerMenu size={30} />
      </NavIcon>
    </Container>
  );
};

export default Navbar;
