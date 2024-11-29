import { Route, Routes } from 'react-router-dom'
import { Home, Incomes,Budgets,Expenses } from '../pages'
const AllRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/all-incomes' element={<Incomes/>}/>
    <Route path='/all-budgets' element={<Budgets/>}/>
    <Route path='/all-expenses' element={<Expenses/>}/>
  </Routes>
  )
}

export default AllRoutes
