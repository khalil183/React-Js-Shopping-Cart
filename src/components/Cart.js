import { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/Product";
import CartItem from "./CartItem";

function Cart() {

    const {cartItems, totalPrice, cartTotal} = useContext(ProductContext)

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((cartItemProduct, index) =>{
                        return <CartItem cartItemProduct={cartItemProduct} key={index}/>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total Price</td>
                        <td>${cartTotal}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
  }
  
  export default Cart;
  