import { createContext, useEffect, useState } from "react";

const addCardItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }



    return [...cartItems, {...productToAdd, quantity:1}]
}
// decrementing CartItem
const removeCartItem  = (cartItems,productToRemove) =>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)
    
    if(existingCartItem.quantity ===1) {
        return cartItems.filter(cartItem=>cartItem.id !== productToRemove.id);
    }
    return cartItems.map((cartItem)=>{
        return cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    })

}
const clearCartItem = (cartItems, cartItemToRemove) =>{
    return cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id);
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: ()=> {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    
    useEffect(()=>{
        const newCardCount = cartItems.reduce((total, cartItem)=>total + cartItem.quantity,0)
        setCartCount(newCardCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) =>{ 
        setCartItems(addCardItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) =>{ 
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const clearItemFromCart = (productToRemove) =>{ 
        setCartItems(clearCartItem(cartItems,productToRemove))

    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, removeItemFromCart, cartCount, clearItemFromCart}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )

}