import React from 'react'
import {Row} from 'react-bootstrap'
import Product from './Product'
import '../css/ProductList.css'


const ProductList = (props) => {
  return (
    <div>
      <Row xs={1} md={2} className="fix g-4 py-3 justify-content-center">
        {props.data.map((d, i) => (
          <Product d={d} key={i} />
        ))}
      </Row>
    </div>
  )
}

export default ProductList