import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigation = useNavigate()
  return (
    <div>
      <div className='component'>Contact</div>
      <button onClick={()=> navigation("/")}>Back to Home</button>
    </div>
  )
}

export default Contact
