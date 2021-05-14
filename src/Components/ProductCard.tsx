import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { IProduct } from '../helper'

interface IProps{
    product:IProduct,
    addReviewHandler: (id:string) => void,
}

const ProductCard:React.FC<IProps> = ({product,addReviewHandler}) => {
    return (
        <div className="d-flex justify-content-center align-items-center w-70">
            <Card>
                <CardBody>
                <CardTitle tag="h5">{product.productTitle}<CardSubtitle tag="h6" className="text-muted d-inline">{product.categoryID}</CardSubtitle> </CardTitle>          
                <CardText>{product.description}</CardText>
                <Button className="d-inline" color="primary" onClick={() => addReviewHandler(product.id)}>Write a Review</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductCard
