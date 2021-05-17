import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListProducts from '../Components/ListProducts';
import { IProduct } from '../helper'
const PRODUCT_URL:string = process.env.REACT_APP_PRODUCT_URI || "https://609cc6bd04bffa001792d455.mockapi.io/products/"

const ProductHunt:React.FC = () => {

    const [products,setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        axios.get(PRODUCT_URL)
        .then(res => setProducts(res.data))
        .catch(err => alert(err))
    },[])

    const addReviewHandler = (productID:string) => {
        console.log("Complete this function")
    }   

    return (
        <div>
            <h1>Product hunt</h1>
            <ListProducts products={products} addReviewHandler={addReviewHandler}/>
        </div>
    )
}

export default ProductHunt
