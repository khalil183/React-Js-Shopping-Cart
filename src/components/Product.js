import { useContext } from "react";
import { ProductContext } from "../contexts/Product";
import ShowProduct from "./ShowProduct";

function Product() {
    const {products} = useContext(ProductContext);
    return (
        <div className="row">
            {products.map((productItem, index)=>{
                return <ShowProduct productItem={productItem} key={index}/>
            })}
            
        </div>
    );
  }
  
  export default Product;
  