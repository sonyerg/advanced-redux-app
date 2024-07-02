import React from "react";

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 21,
    title: "Book 1",
    description: "This is book 1",
  },
  {
    id: "p2",
    price: 24,
    title: "Book 2",
    description: "This is book 2",
  },
  {
    id: "p3",
    price: 25,
    title: "Book 3",
    description: "This is book 3",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
