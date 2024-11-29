import { Route, Routes } from 'react-router-dom'
import { Home, Incomes,Budgets } from '../pages'
const AllRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/all-incomes' element={<Incomes/>}/>
    <Route path='/all-budgets' element={<Budgets/>}/>
  </Routes>
  )
}

export default AllRoutes
