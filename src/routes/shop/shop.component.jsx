import {Routes, Route} from 'react-router-dom'
import {CategoriesPreview, Directory} from '../index'
import './shop.styles.scss'

const Shop = () =>{

    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Directory />} />
        </Routes>
    )
   

}
export default Shop