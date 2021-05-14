import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import { IProduct } from '../helper';

interface IProps{
    product:IProduct,
    open:boolean,
    closeModel:() => void,
}

const ProductDetails:React.FC<IProps> = ({open,closeModel,product}) => {

  return (
    <div>
      <Button color="danger" onClick={closeModel}>Close</Button>
        <Modal isOpen={open} toggle={closeModel}>
            <ModalHeader toggle={closeModel}>{product.productTitle}</ModalHeader>
            <ModalBody>
                <Row>
                    {product.description}
                </Row>
                {product.reviews.map(rev => <Row>{rev.review}</Row>)}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={closeModel}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
  );
}

export default ProductDetails;
