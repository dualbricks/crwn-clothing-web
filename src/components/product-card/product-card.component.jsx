import {Button} from '../index';
import { CartContext } from '../../contexts/index';

import './product-card.styles.scss'
import { useContext } from 'react';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)
    
    return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>ADD to cart</Button>
    </div>)

}

export default ProductCard