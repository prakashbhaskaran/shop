import React, { createContext, useEffect, useState } from "react";
import Data from "../data/products.json";
export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [items, setItems] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    setItems(Data);
  }, []);

  useEffect(() => {
    setSaved(items.filter((item) => item.added === true));
  }, [items]);

  const addtocart = (id) => {
    const addedItem = items.map((item) =>
      item.productid === id ? { ...item, added: true } : item
    );
    setItems(addedItem);
  };
  const removefromcart = (id) => {
    const removedItem = items.map((item) =>
      item.productid === id ? { ...item, added: false } : item
    );
    setItems(removedItem);
  };
  const increment = (id) => {
    const incremented = items.map((item) =>
      item.productid === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(incremented);
  };
  const decrement = (id) => {
    const decremented = items.map((item) =>
      item.productid === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
          }
        : item
    );
    setItems(decremented);
  };

  const store = {
    items,
    saved,
    addtocart,
    removefromcart,
    increment,
    decrement,
  };
  return (
    <ProductContext.Provider value={store}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
