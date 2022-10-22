import React from 'react'
import {Row} from 'react-bootstrap'
import Product from './Product'


const ProductList = (props) => {
  return (
    <div>
      <Row xs={1} md={2} className="g-4 py-3 justify-content-center">
        {props.data.map((d, i) => (
          <Product d={d} key={i} />
        ))}
      </Row>
    </div>
  )
}

export default ProductList