import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-white w-full flex items-center justify-between h-[10vh] px-6 shadow-xl'>
      <Link to="/"><h3 className='text-2xl font-bold text-gray-700 underline'>Dashboard</h3></Link>
      <Link to="/all-incomes"><h3 className='text-2xl font-bold text-gray-700 underline'>All Incomes</h3></Link>
      <Link to="/all-budgets"><h3 className='text-2xl font-bold text-gray-700 underline'>All Budgets</h3></Link>
      <Link to="/all-expenses"><h3 className='text-2xl font-bold text-gray-700 underline'>All Expenses</h3></Link>
    </nav>
  )
}

export default NavBar
