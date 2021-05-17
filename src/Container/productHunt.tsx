import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListProducts from '../Components/ListProducts';
import ProductDetails from '../Components/ProductDetails';
import { IProduct } from '../helper'
const PRODUCT_URL:string = process.env.REACT_APP_PRODUCT_URI || "https://609cc6bd04bffa001792d455.mockapi.io/products/"

const ProductHunt:React.FC = () => {

    const [products,setProducts] = useState<IProduct[]>([]);
    const [modelProduct,setModelProduct] = useState<IProduct>();
    const [open,setOpen] = useState<boolean>(false);

    useEffect(() => {
        axios.get(PRODUCT_URL)
        .then(res => setProducts(res.data))
        .catch(err => alert(err))
    },[])

    const addReviewHandler = (productID:string) => {
        console.log("Complete this function")
    }
    
    const openModel = (product:IProduct) => {
        setModelProduct(product);
        setOpen(true);
    }

    const closeModel = () =>{
        setOpen(false)
    }

    return (
        <div>
            <h1>Product hunt</h1>
            <ListProducts products={products} addReviewHandler={addReviewHandler} openModel={openModel}/>
            {modelProduct && <ProductDetails product={modelProduct} open={open} closeModel={closeModel}/>}
        </div>
    )
}

export default ProductHunt
