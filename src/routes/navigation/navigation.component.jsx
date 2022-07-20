import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/index'
import { SignOutUser } from '../../utils/firebase/firebase.utilis'

const Navigation = () => {
    const {currentUser} = useContext(UserContext)

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
                </div>
            </div>
            <Outlet />
        </Fragment>
    )

}

export default Navigation
   