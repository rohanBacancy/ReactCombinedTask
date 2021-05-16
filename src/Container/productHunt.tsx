
import React, { useEffect, useState } from 'react';
import CategoryProduct from '../Components/CategoryProduct';
import axios from 'axios';
import { Col, Row } from "reactstrap";

export interface Iproduct {
    id: string;
    userID: string;
    categoryID: string;
    productTitle: string;
    reviews: Object[];
    description: String
}

function productHunt() {

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
          <div className="d-flex flex-row">
                <span className="mx-3">Category</span>
                <span className="w-25"><CategoryProduct setProductData={setProductData}  /></span>
            </div>
          </Col>
          <Col sm={3}>dropdown</Col>
        </Row>
      </div>
    </>
  );
}

export default productHunt;

