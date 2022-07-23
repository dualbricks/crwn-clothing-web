import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'

import { CartContext } from '../../contexts/index'

import {Button, CartItem} from '../index'


import './cart-dropdown.styles.scss'


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigation = useNavigate()
    const goToCheckoutHandler = () => {
        navigation('/checkout')

    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown