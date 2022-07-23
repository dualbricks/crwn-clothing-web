import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext, CartContext } from '../../contexts/index'
import { SignOutUser } from '../../utils/firebase/firebase.utilis'
import { CartIcon, CartDropdown } from '../../components/index'
import './navigation.styles.scss'


const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    const SignOutHandler = async ()=>{
        await SignOutUser();
    }

    return( 
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={SignOutHandler}>SIGN OUT</span>)
                        : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )

}

export default Navigation
   