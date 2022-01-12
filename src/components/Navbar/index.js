import React, { useContext, useRef, useState } from "react";
import { GlobalLink, Div, Span } from "../../styles/global";
import { Container, List, ListItem, NavIcon } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrProductHunt } from "react-icons/gr";
import { ProductContext } from "../../Context/ProductProvider";
import { primary } from "../../styles/Color";
import useOutSideClick from "../../utils/OutSideClick";

const Navbar = () => {
  const { saved } = useContext(ProductContext);
  const [click, setClick] = useState(false);
  const ref = useRef(null);
  useOutSideClick(ref, () => setClick(false));
  return (
    <Container ref={ref}>
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
        <Span
          radius="100%"
          position="absolute"
          width="20px"
          height="20px"
          text="center"
          background={`${primary}`}
          right="-10px"
          top="-8px"
          display={saved.length !== 0 ? "initial" : "none"}
        >
          {saved.length}
        </Span>
        <GiHamburgerMenu size={30} />
      </NavIcon>
    </Container>
  );
};

export default Navbar;
