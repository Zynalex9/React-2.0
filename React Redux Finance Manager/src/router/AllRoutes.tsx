import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'
const AllRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  )
}

export default AllRoutes
