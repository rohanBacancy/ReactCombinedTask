
import React, { useEffect, useState } from 'react';
import CategoryProduct from '../Components/CategoryProduct';
import ProductSearch from '../Components/ProductSearch';
import axios from 'axios';
import { Col, Row } from "reactstrap";
import Search from '../Components/Search';

export interface Iproduct {
  id: string;
  userID: string;
  categoryID: string;
  productTitle: string;
  reviews: Object[];
  description: String
}

function ProductHunt() {

  const [productData, setProductData] = useState<Array<Iproduct>>([])

  useEffect(() => {
    axios.get<Iproduct[]>('https://609cc6bd04bffa001792d455.mockapi.io/products')
      .then((response) => {
        console.log('res', response.data);
        setProductData(response.data)
      })


  }, [setProductData])



  return (
    <>
      <div className="container pt-3">
        <div className="d-flex justify-content-between">
          <h1>Product Hunt</h1>
          <h2>Add a Product</h2>
        </div>
        <hr />
        <Row>
          <Col>
            <h5><ProductSearch setProductData={setProductData} /></h5>
          </Col>
          <Col sm={1}>
            Category
          </Col>
          <Col sm={2}><CategoryProduct setProductData={setProductData} /></Col>
        </Row>
        {
          productData.map(product => (
            <ul>
              <li>{product.id}</li>
              <li>{product.productTitle}</li>
              <li>{product.description}</li>
            </ul>
          ))
        }
      </div>
    </>
  );
}

export default ProductHunt;

