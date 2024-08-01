import React from 'react'
import  NotFound from "../assets/notFoundImage.jpg"
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
    <section className='flex flex-col justify-center items-center'>
      <p className='text-3xl text-gray-700 dark:text-white'>404 Oops! Page Not Found</p>
      <div className='my-4 max-w-lg'>
        <img src={NotFound} alt="" />
      </div>
      <div>
        <Link to="/">
        <button className='w-64 text-xl text-white bg-blue-400 px-4 py-2.5 rounded-xl hover:scale-105 transition-all'>Back To Cinemate</button>
        </Link>
      </div>
    </section>
  )
}

export default PageNotFound
