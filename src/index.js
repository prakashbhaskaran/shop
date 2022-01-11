import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ProductProvider from "./Context/ProductProvider";

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById("root")
);
