import { Button, Col, Row } from "reactstrap";
import { useAuth } from "../Hooks/useAuth";
import { removeItemFromStorage } from "../helper";
import ListProducts from "../Components/ListProducts";
import ProductDetails from "../Components/ProductDetails";
import { IProduct } from "../helper";
import axios from "axios";
import { useEffect, useState } from "react";

const PRODUCT_URL: string =
  process.env.REACT_APP_PRODUCT_URI ||
  "https://609cc6bd04bffa001792d455.mockapi.io/products/";

const ProductHunt: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [modelProduct, setModelProduct] = useState<IProduct>();
  const [open, setOpen] = useState<boolean>(false);

  const auth = useAuth();
  const logoutHandler = () => {
    removeItemFromStorage("productHuntUserId");
    auth.logout();
  };

  useEffect(() => {
    axios
      .get(PRODUCT_URL)
      .then((res) => setProducts(res.data))
      .catch((err) => alert(err));
  }, []);

  const addReviewHandler = (productID: string) => {
    console.log("Complete this function");
  };

  const openModel = (product: IProduct) => {
    setModelProduct(product);
    setOpen(true);
  };

  const closeModel = () => {
    setOpen(false);
  };

  return (
    <div className="container pt-3">
      <div className="d-flex justify-content-between">
        <h1>Product Hunt</h1>
        <h2>Add a Product</h2>
        <Button color="danger" onClick={logoutHandler}>
          Log Out
        </Button>
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
        <ListProducts
          products={products}
          addReviewHandler={addReviewHandler}
          openModel={openModel}
        />
        {modelProduct && (
          <ProductDetails
            product={modelProduct}
            open={open}
            closeModel={closeModel}
          />
        )}
      </Row>
    </div>
  );
};

export default ProductHunt;
