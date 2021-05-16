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
