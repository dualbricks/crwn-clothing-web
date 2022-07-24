import { CategoryPreview } from '../../components/index'
import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/index'

const CategoriesPreview = () =>{
    const {categoriesMap} = useContext(CategoriesContext)
    return(
        <>
       
        {
                Object.keys(categoriesMap).map((title)=>{
                    const products =categoriesMap[title]
                    return ( <CategoryPreview  key={title} title={title} products={products}/>)
                })
        }

        </>

    )

    
}

export default CategoriesPreview