import { Route, Routes } from 'react-router-dom'
import { Home, Incomes } from '../pages'
const AllRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/all-incomes' element={<Incomes/>}/>
  </Routes>
  )
}

export default AllRoutes
