import { useEffect, useState } from "react"

export const useFetch=(url)=>{
const [data,setData] = useState(null)
useEffect(()=>{
const fetchData = async ()=>{
    const res = await fetch(url)
    const result = await res.json()
    setData(result)
}
fetchData()
},[url])
return {data}
}