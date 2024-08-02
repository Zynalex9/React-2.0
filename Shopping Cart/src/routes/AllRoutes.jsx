import React from 'react'
import { Route,Routes } from 'react-router-dom';
import { Home, CartPage } from "../pages";

function AllRoutes({products, setProducts,cardItems,setCardItems}) {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home products={products} setProducts={setProducts} cardItems={cardItems} setCardItems={setCardItems}/>}/>
        <Route path='Cart' element={<CartPage cardItems={cardItems}/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes
