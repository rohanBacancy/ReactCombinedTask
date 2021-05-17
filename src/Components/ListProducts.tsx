import { IProduct } from "../helper"
import ProductCard from "./ProductCard"

interface IProps{
    products:IProduct[],
    addReviewHandler: (id:string) => void,
    openModel: (product:IProduct) => void,
}

const ListProducts:React.FC<IProps> = ({ products,addReviewHandler,openModel }) => {
    return (
        <>
            {
                products.map(product => 
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    addReviewHandler={addReviewHandler}
                    openModel={openModel}/>)
            }
        </>
    )
}

export default ListProducts
