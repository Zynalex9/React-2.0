import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductList/>
    </>
  )
}

export default App
