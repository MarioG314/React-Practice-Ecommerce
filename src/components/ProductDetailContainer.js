import { useEffect, useState } from "react"
import React from 'react'
import ProductDetail from "./ProductDetail";
import {useParams} from 'react-router-dom'

const ProductDetailContainer = () => {
   const params = useParams()
   const [data, setData] = useState([]);
   useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
   }, []);

   return <ProductDetail data={data} />
}

export default ProductDetailContainer