import React, { useCallback, useEffect, useState } from 'react'

function ProductList() {
    const [products,setProducts] = useState([])
    const [URL, setURL] = useState('http://localhost:8000/products')
    const fetchProducts = useCallback(async ()=>{
        const res = await fetch(URL) 
        const data = await res.json()  
        setProducts(data)
        },[URL])
    
    useEffect(()=>{
    fetchProducts()
    console.log("-")
    },[fetchProducts])
    
    return (
        <section>
            <div className="filter">

            <button onClick={()=> setURL('http://localhost:8000/products')}>All</button>
            <button onClick={()=> setURL('http://localhost:8000/products?category=React+Course')}>React Courses</button>
            <button onClick={()=> setURL('http://localhost:8000/products?category=JS+Course')}>JS Courses</button>
            <button onClick={()=> setURL('http://localhost:8000/products?category=HTML+Course')}>HTML Courses</button>
            <button onClick={()=> setURL('http://localhost:8000/products?category=Python+Course')}>Pyton Courses</button>
            <button onClick={()=> setURL('http://localhost:8000/products?in_stock=true')}>In Stock Only</button>
            </div>

            { products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>${product.price}</span>
                        <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                    </p>
                </div>            
            )) }
        </section>
      )
    }

export default ProductList