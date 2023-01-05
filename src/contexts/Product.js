import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductContextProvider(props){
    const [products] = useState([
        {
            id : 3,
            name : 'Hyderabadi Biryani',
            price : 45,
            image : 'menu1.png',
            description : 'Pizza is a savory dish of Italian origin consisting of a usually round'
        },

        {
            id : 1,
            name : 'Chicken Masala',
            price : 40,
            image : 'menu2.png',
            description : 'Pizza is a savory dish of Italian origin consisting of a usually round'
        },

        {
            id : 10,
            name : 'Daria Shevtsova',
            price : 25,
            image : 'menu3.png',
            description : 'Pizza is a savory dish of Italian origin consisting of a usually round'
        },

        {
            id : 15,
            name : 'Maxican Pizza Test Better',
            price : 55,
            image : 'menu4.png',
            description : 'Pizza is a savory dish of Italian origin consisting of a usually round'
        },

        {
            id : 1,
            name : 'Chicken Masala - 2',
            price : 120,
            image : 'menu5.png',
            description : 'Pizza is a savory dish of Italian origin consisting of a usually round'
        },

        {
            id : 9,
            name : 'Daria Shevtsova - 10',
            price : 30,
            image : 'menu6.png',
            description : 'Pizza is a savory dish of Italian origin consisting of a usually round'
        },
        

        {
            id : 24,
            name : 'Maxican Pizza Test Better - 2',
            price : 53,
            image : 'menu7.png',
            description : 'Pizza is a savory dish of Italian origin consisting of a usually round'
        },

        {
            id : 3,
            name : 'Hyderabadi Biryani - 2',
            price : 20,
            image : 'menu8.png',
            description : 'Pizza is a savory dish of Italian origin consisting of a usually round'
        }
        
    ])

    const [cartItems, setCartItem] = useState([]);

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        let totalPrice = 0;
        cartItems.map(cartItem => {
            let subTotal = parseInt(cartItem.qty) * parseInt(cartItem.price);
            totalPrice +=subTotal;
        });

        setCartTotal(totalPrice);        
    })
    const totalPrice = () =>{
        let totalPrice = 0;
        cartItems.map(cartItem => {
            let subTotal = parseInt(cartItem.qty) * parseInt(cartItem.price);
            totalPrice +=subTotal;
        });

        return totalPrice;
    }

    const updateItemQty = (id,qty) =>{
        let newCart = cartItems.map(cartItem =>{
            if(cartItem.id == id){
                let newItem = {
                    ...cartItem,
                    qty
                };
                return newItem;
            }

            return cartItem;
        })
        setCartItem(newCart)
    }


    const addToCart = (productItem) => {
        let newItem = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            productId : productItem.id,
            productName : productItem.name,
            qty : 1,
            price : productItem.price
        }

        setCartItem([
            ...cartItems,
            newItem
        ]);
    }

    const removeItem = (id) =>{
        let newCart= cartItems.filter(cartItem => cartItem.id !== id);
        setCartItem(newCart)
    }
    return(
        <ProductContext.Provider value={{ products, cartItems, totalPrice, updateItemQty , cartTotal, addToCart, removeItem }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;