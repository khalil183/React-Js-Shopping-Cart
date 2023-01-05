import { useContext, useState } from "react";
import { ProductContext } from "../contexts/Product";

function CartItem({cartItemProduct}) {
    const {updateItemQty, removeItem} = useContext(ProductContext)
    const [qty, setQty] = useState(cartItemProduct.qty);
    
    const updateQty = (e)=>{
        setQty(e.target.value);
         updateItemQty(cartItemProduct.id, e.target.value);
    }
    return (
        <tr>
            <td>{cartItemProduct.productName}</td>
            <td>${cartItemProduct.price}</td>
            <td>
                <input style={{ width: '50px' }} type="number" value={qty} onChange={updateQty}/>
                {/* <input style={{ width: '50px' }} type="number" value={qty} onChange={(e) => setQty(e.target.value)}/> */}
            </td>
            <td>${parseInt(qty) * parseInt(cartItemProduct.price)}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => removeItem(cartItemProduct.id)}>Delete</button>
            </td>
        </tr>
    );
  }
  
  export default CartItem;
  