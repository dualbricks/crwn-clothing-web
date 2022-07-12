import './menu.styles.scss'
import CategoryItem from '../category-item/category-item.component'

const Menu = ({categories}) => (
    <div className='categories-container'>
      {categories.map((category)=>(
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
)

export default Menu
