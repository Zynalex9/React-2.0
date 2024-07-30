import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./components/Contact";
import Admin from "./components/Admin";

function App() {
  let user = true;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
