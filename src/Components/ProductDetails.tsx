import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Container } from 'reactstrap';
import { IProduct } from '../helper';

interface IProps{
    product:IProduct,
    open:boolean,
    closeModel:() => void,
}

const ProductDetails:React.FC<IProps> = ({open,closeModel,product}) => {

  return (
    <div className="d-flex justify-content-center align-items-center">
        <Modal isOpen={open} toggle={closeModel}>
            <ModalHeader toggle={closeModel}>{product.productTitle}</ModalHeader>
            <ModalBody>
              <Container>
                <Row>
                    {product.description}
                </Row>
                
                {product.reviews.length>0 && <Row className="mt-2 mb-2 fs-4">Reviews -:</Row>}
                {product.reviews.length>0 && product.reviews.map(rev => <Row>{rev.review}</Row>)}
                </Container>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={closeModel}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
  );
}

export default ProductDetails;
