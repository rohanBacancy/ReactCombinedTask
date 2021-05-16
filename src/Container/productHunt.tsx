<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import CategoryProduct from '../Components/CategoryProduct';
import axios from 'axios';

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
            .catch(error => {
                alert(error)
            });

    }, [setProductData])
    return (
        <>
            <div>Product Hunt</div>
            <div className="d-flex flex-row">
                <span className="mx-3">Category</span>
                <span className="w-25"><CategoryProduct setProductData={setProductData}  /></span>
            </div>

        </>
    )
}

export default ProductHunt
=======
import React from "react";
import { Col, Row } from "reactstrap";

function productHunt() {
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
            <h5>Search</h5>
          </Col>
          <Col sm={2}>
            <h5>Category</h5>
          </Col>
          <Col sm={3}>dropdown</Col>
        </Row>
      </div>
    </>
  );
}

export default productHunt;

>>>>>>> bb0815fa63be44a3936cc53d6b3379f74a73f36b
