
import { useContext } from "react";
import { ProductContext } from "../contexts/Product";

function ShowProduct({productItem}) {
    const {addToCart} = useContext(ProductContext);
    return (
        <div className="col-md-4 mb-3">
            <div className="card" >
                <img className="card-img-top" src={require(`../images/${productItem.image}`)} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{productItem.name}</h5>
                <h5 className="card-title">Price: ${productItem.price}</h5>
                <a onClick={() => addToCart(productItem)} className="btn btn-primary">Add To Cart</a>
                </div>
            </div>
        </div>
    );
  }
  
  export default ShowProduct;
  