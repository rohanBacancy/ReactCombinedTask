import axios from "axios";
import React, { useEffect, useState } from "react";
import ListProducts from "../Components/ListProducts";
import { IProduct } from "../helper";
import { Col, Row } from "reactstrap";
const PRODUCT_URL: string =
  process.env.REACT_APP_PRODUCT_URI ||
  "https://609cc6bd04bffa001792d455.mockapi.io/products/";

const ProductHunt: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get(PRODUCT_URL)
      .then((res) => setProducts(res.data))
      .catch((err) => alert(err));
  }, []);

  const addReviewHandler = (productID: string) => {
    console.log("Complete this function");
  };

  return (
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
      <Row>
        <ListProducts products={products} addReviewHandler={addReviewHandler} />
      </Row>
    </div>
  );
};

export default ProductHunt;
