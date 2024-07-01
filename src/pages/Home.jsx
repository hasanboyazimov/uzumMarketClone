import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Carousel from "../components/Carousel";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/products")
        .then((data) => data.json())
        .then((products) => setProducts(products.products));

      throw new Error("Something went wrong!");
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  return (
    <div className="container max-w-[1240px] mr-auto ml-auto">
      <Carousel />
      <Products products={products} />
    </div>
  );
}

export default Home;
