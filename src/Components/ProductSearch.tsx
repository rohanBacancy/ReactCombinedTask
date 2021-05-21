import React, { useEffect, useState } from 'react'
import { Button, Input } from 'reactstrap'
import { IProduct } from '../helper';
import axios from 'axios';

interface Props {
    setProductData:  React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const ProductSearch: React.FC<Props> = ({setProductData}) => {
    const [searchTerm, setSearchTerm] = useState("")
    let productData:IProduct[] = []
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        axios.get<IProduct[]>('https://609cc6bd04bffa001792d455.mockapi.io/products')
      .then((response) => {
        productData = response.data
        const results = productData.filter(product => product.productTitle.toLowerCase().includes(searchTerm))
        setProductData([...results])
      }).catch(error => alert(error))

        
    }, [searchTerm])
    return (
        <div className="d-flex flex-row">
            <Input
                className="w-25 mx-2"
                type="text"
                placeholder="Search notes"
                name="search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    )
}

export default ProductSearch
