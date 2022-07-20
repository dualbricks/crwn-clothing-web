import {Routes, Route} from 'react-router-dom'

import {Home, Navigation, Authentication} from "./routes/index";
const Shop = () => {
  return <h1> I am the shop page</h1>
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={ <Home/>} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication/>} />
      </Route>
    </Routes>

  ) 
}

export default App;
