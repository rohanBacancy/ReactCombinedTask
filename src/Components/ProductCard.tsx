import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { IProduct } from '../helper'
const CATEGORY_URL = process.env.REACT_APP_CATEGORY_URI || "https://609cc6bd04bffa001792d455.mockapi.io/categories/"

interface IProps{
    product:IProduct,
    addReviewHandler: (id:string) => void,
    openModel: (product:IProduct) => void,
}

const ProductCard:React.FC<IProps> = ({product,addReviewHandler,openModel}) => {

    const [thisProductCategory,setThisProductCategory] = useState<string>();
    
    useEffect(() => {
        axios.get(CATEGORY_URL + product.categoryID)
        .then(res => setThisProductCategory(res.data.label))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Card className="w-50 p-2 mb-2 rounded-4">
                <CardBody>
                <CardTitle tag="h5" className="text-primary" onClick={() => openModel(product)}>{product.productTitle}<CardSubtitle tag="h6" className="text-muted mt-1">{thisProductCategory}</CardSubtitle> </CardTitle>          
                <CardText onClick={() => openModel(product)}>{product.description}</CardText>
                <Button className="d-inline" color="primary" onClick={() => addReviewHandler(product.id)}>Write a Review</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductCard
