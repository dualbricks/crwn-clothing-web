import { categories, Menu } from "../../components/index";
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Outlet />
      <Menu categories={categories}/>
    </div>
   
    );
}

export default Home;