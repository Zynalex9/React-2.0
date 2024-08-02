import React from 'react'
import { CartCard } from '../components'

function CartPage({ cardItems, setCardItems }) {
  return (
    <div>
     <CartCard cardItems={cardItems}/>
    </div>
  )
}

export default CartPage
