import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "https://images.unsplash.com/photo-1505739718967-6df30ff369c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "https://images.unsplash.com/photo-1505739718967-6df30ff369c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "https://images.unsplash.com/photo-1505739718967-6df30ff369c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "https://images.unsplash.com/photo-1505739718967-6df30ff369c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "https://images.unsplash.com/photo-1505739718967-6df30ff369c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "https://images.unsplash.com/photo-1505739718967-6df30ff369c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
