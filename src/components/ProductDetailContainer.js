import { useEffect, useState } from "react"
import React from 'react'
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
   const [data, setData] = useState([]);
   useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
   }, []);
   
   return <ProductDetail data={data} />
}

export default ProductDetailContainer