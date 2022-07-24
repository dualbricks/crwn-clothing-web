import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components'
import { CategoriesContext } from '../../contexts/index'
import './directory.styles.scss'

const Directory = () =>{
    const {category} = useParams()
    console.log(category)
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className='directory-container'>

        {
            products && products.map((product)=> <ProductCard key={product.id} product={product} />)
        }

        </div>

    )

}


export default Directory