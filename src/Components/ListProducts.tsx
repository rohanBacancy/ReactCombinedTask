import { IProduct } from "../helper"
import ProductCard from "./ProductCard"

interface IProps{
    products:IProduct[],
    addReviewHandler: (id:string) => void,
}

const ListProducts:React.FC<IProps> = ({ products,addReviewHandler }) => {
    return (
        <>
            {
                products.map(product => 
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    addReviewHandler={addReviewHandler}/>)
            }
        </>
    )
}

export default ListProducts
