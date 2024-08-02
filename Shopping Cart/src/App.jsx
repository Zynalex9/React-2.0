import { useEffect, useState } from "react";
import "./App.css";
import { Header, Footer } from "./components";
import AllRoutes from "./routes/AllRoutes";

function App() {
  const [products, setProducts] = useState([]);
  const [cardItems, setCardItems] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Header cardItems={cardItems}/>
      <AllRoutes products={products} setProducts={setProducts} cardItems={cardItems} setCardItems={setCardItems}/>
    </>
  );
}

export default App;
